const express = require("express");
const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// helper
const getCart = async (userId, guestId) => {
  if (userId) return await Cart.findOne({ user: userId });
  if (guestId) return await Cart.findOne({ guestId });
  return null;
};

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    // validate ID FIRST
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const qty = Number(quantity);

    if (qty <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than 0" });
    }

    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ message: "Product not found!" });

    let cart = await getCart(userId, guestId);

    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.equals(productId) &&
          p.size?.trim().toLowerCase() === size?.trim().toLowerCase() &&
          p.color?.trim().toLowerCase() === color?.trim().toLowerCase(),
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += qty;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images?.[0]?.url || "",
          price: product.price,
          size,
          color,
          quantity: qty,
        });
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      //create a new cart for the guest or user

      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images?.[0]?.url || "",
            price: product.price,
            size,
            color,
            quantity: qty,
          },
        ],
        totalPrice: product.price * qty,
      });

      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@route   PUT /api/cart
//@desc Uppdate product quantity in the cart for  a guest or logged- in user

router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);

    // If no cart
    if (!cart) {
      return res.status(404).json({ message: "Cart not found!" });
    }

    //  Find product
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not in cart!" });
    }

    //  Update or remove
    if (quantity > 0) {
      cart.products[productIndex].quantity = Number(quantity);
    } else {
      cart.products.splice(productIndex, 1);
    }

    // Recalculate total
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@Route DELETE /api/cart
//@Desc Clear cart for a guest or logged-in user
// Remove the "/:productId" and just use "/"
router.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { userId, guestId, size, color } = req.query;

    const cart = await getCart(userId, guestId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found!" });
    }

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color,
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not in cart!" });
    }

    cart.products.splice(productIndex, 1);

    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
//route  post /api/cart/merge
//desc Merge guest cart with user cart upon login
//@access private

router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;

  if (!guestId) {
    return res.status(400).json({ message: "guestId is required" });
  }

  const userId = req.user.id;

  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: userId });

    if (!guestCart || guestCart.products.length === 0) {
      // No guest cart to merge — not an error, just return the user's existing cart or an empty one
      return res.status(200).json(userCart || { products: [], totalPrice: 0 });
    }

    if (userCart) {
      guestCart.products.forEach((guestItem) => {
        const index = userCart.products.findIndex(
          (item) =>
            item.productId.toString() === guestItem.productId.toString() &&
            item.size === guestItem.size &&
            item.color === guestItem.color,
        );

        if (index > -1) {
          // ✅ SAFE MERGE
          userCart.products[index].quantity = Math.max(
            userCart.products[index].quantity,
            guestItem.quantity,
          );
        } else {
          userCart.products.push(guestItem);
        }
      });

      userCart.totalPrice = userCart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      await userCart.save();
      await Cart.findOneAndDelete({ guestId });

      return res.status(200).json(userCart);
    } else {
      guestCart.user = userId;
      guestCart.guestId = undefined;

      await guestCart.save();
      return res.status(200).json(guestCart);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
