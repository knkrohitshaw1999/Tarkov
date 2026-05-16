import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminProducts,
  deleteProduct,
} from "../../redux/slices/adminProductSlice";
import SearchBar from "../Common/SearchBar";
import Button from "../Common/Button";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector(
    (state) => state.adminProduct
  );

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch products
  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  // Apply filters whenever products/search/category changes
  useEffect(() => {
    let filtered = products;

    // 🔍 Search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 📂 Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category?.toLowerCase() === selectedCategory ||
          product.gender?.toLowerCase() === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory]);

  // Delete handler
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id)).then(() => {
        dispatch(fetchAdminProducts());
      });
    }
  };

  // Loading & Error
  if (loading) return <p className="text-center p-6">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Product Management</h2>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          
          {/* 🔍 Search */}
          <SearchBar
            useNavigation={false}
            onSearch={(query) => setSearchQuery(query)}
          />

          {/* 📂 Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-3 py-2 rounded-lg bg-white shadow-sm"
          >
            <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="top wear">Top Wear</option>
            <option value="bottom wear">Bottom Wear</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="min-w-full text-left text-gray-600">
          
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-2 md:p-4 text-gray-500">{index + 1}</td>

                  <td className="p-2 md:p-4 font-medium text-gray-900">
                    {product.name}
                  </td>

                  <td className="p-2 md:p-4">₹{product.price}</td>

                  <td className="p-2 md:p-4">{product.sku}</td>

                  <td className="p-2 md:p-4 flex justify-center gap-2">
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() =>
                        navigate(`/admin/products/${product._id}/edit`)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No Products Found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ProductManagement;