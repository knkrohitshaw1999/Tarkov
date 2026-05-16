import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleItem = (product) => {
    const isSelected = selectedItems.some(
      (item) =>
        item.productId === product.productId &&
        item.size === product.size &&
        item.color === product.color
    );
    if (isSelected) {
      setSelectedItems(
        selectedItems.filter(
          (item) =>
            !(
              item.productId === product.productId &&
              item.size === product.size &&
              item.color === product.color
            )
        )
      );
    } else {
      setSelectedItems([...selectedItems, product]);
    }
  };

  const handleCheckout = () => {
    let itemsToCheckout = cart?.products || [];
    if (cart?.products?.length > 1) {
      if (selectedItems.length === 0) {
        alert("Please select at least one product to checkout.");
        return;
      }
      itemsToCheckout = selectedItems;
    }

    toggleCartDrawer(); 
    if (!user) {
      navigate("/login?redirect=checkout", { state: { checkoutItems: itemsToCheckout } });
    } else {
      navigate("/checkout", { state: { checkoutItems: itemsToCheckout } });
    }
  };

  return (
    <>
      {/* 1. Added Backdrop Overlay */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleCartDrawer}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/2 md:w-[30rem]
         bg-white shadow-lg transform transition-transform
         duration-300 ease-in-out flex flex-col z-50 ${
           drawerOpen ? "translate-x-0" : "translate-x-full"
         } `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer} aria-label="Close cart">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Contents */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          
          {/* 2. Fixed the Double Rendering Logic */}
          {cart?.products?.length > 0 ? (
            <CartContents 
              cart={cart} 
              userId={userId} 
              guestId={guestId} 
              selectedItems={selectedItems}
              onToggleItem={handleToggleItem}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
               <p className="text-gray-500">Your cart is empty!</p>
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {cart?.products?.length > 0 && (
          <div className="p-4 bg-white border-t sticky bottom-0">
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Checkout
            </button>
            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
              Shipping, taxes, and discounts calculated at checkout.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;