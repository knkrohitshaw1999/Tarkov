import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp"

const FeaturedCollection = () => {
  return (
    <section className="py-1 px-3 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-200 rounded-2xl">
        
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort Meets Style
          </h3>

          <h2 className="text-4xl lg:text-4xl font-bold mb-6">
            All-Day Comfort, All-Day Style
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends fashion with function.
             Our collection is designed to keep you looking great and feeling comfortable all day long.
          </p>
          <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg
           hover:bg-gray-800">
            Shop Now
          </Link>
        </div>
      {/* Right content */}
      <div className="lg:w-1/2">
        <img src= {featured} alt="Featured Collection" className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"/>
      </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;