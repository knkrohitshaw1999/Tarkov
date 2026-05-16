import React, { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductsDetails from "../components/Products/ProductsDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import DressesToBeNoticed from "../components/Products/DressesToBeNoticed";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch filtered products
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );

    // Fetch best seller
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );

        setBestSellerProduct(response.data);
      } catch (error) {
        console.error("Best Seller Error:", error);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <DressesToBeNoticed />

      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4">
        Best Seller
      </h2>

      {bestSellerProduct ? (
        <ProductsDetails productId={bestSellerProduct?._id} />
      ) : (
        <p className="text-center">Loading Best Seller Product...</p>
      )}

      {/* Women Products */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>

        <ProductGrid
          products={products}
          loading={loading}
          error={error}
        />

        <FeaturedCollection />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Home;