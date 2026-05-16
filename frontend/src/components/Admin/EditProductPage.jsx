import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";

import { fetchProductDetails } from "../../redux/slices/productsSlice";
import { updateProduct } from "../../redux/slices/adminProductSlice";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  const [uploading, setUploading] = useState(false);
  const [updating, setUpdating] = useState(false);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });

  // Fetch product
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  // Set product data
  useEffect(() => {
    if (selectedProduct) {
      setProductData({
        ...selectedProduct,
        images: selectedProduct.images || [],
      });
    }
  }, [selectedProduct]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  // Upload image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setProductData((prev) => ({
        ...prev,
        images: [...prev.images, { url: data.imageUrl, altText: "" }],
      }));

      toast.success("Image uploaded ✅");
    } catch (err) {
      console.error(err);
      toast.error("Image upload failed ❌");
    } finally {
      setUploading(false);
    }
  };

  // Delete image
  const handleDeleteImage = (index) => {
    setProductData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      await dispatch(updateProduct({ id, productData })).unwrap();

      toast.success("Product updated successfully ✅");

      // Optional: refresh latest data
      await dispatch(fetchProductDetails(id));
    } catch (err) {
      console.error(err);
      toast.error("Update failed ❌");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            rows={4}
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Gender</label>
          <select
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Category</label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Top Wear">Top Wear</option>
            <option value="Bottom Wear">Bottom Wear</option>
          </select>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((s) => s.trim()),
              })
            }
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((c) => c.trim()),
              })
            }
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />

          {uploading && <p className="text-blue-500">Uploading Image...</p>}

          <div className="flex gap-4 mt-4 flex-wrap">
            {productData.images?.map((img, i) => (
              <div key={i} className="relative group">
                <img
                  src={img.url}
                  alt="product"
                  className="w-20 h-20 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(i)}
                  className="absolute top-1 right-1 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100 opacity-0 group-hover:opacity-100"
                >
                  <FiTrash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Updating Message */}
        {updating && (
          <p className="text-blue-500 mb-2">Updating Product...</p>
        )}

        <button
          type="submit"
          disabled={updating}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          {updating ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;