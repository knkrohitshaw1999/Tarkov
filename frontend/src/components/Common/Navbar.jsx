import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  return (
    <>
      {/* NAVBAR */}
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-medium">
          TARKOV
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>

          <Link
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>

          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>

          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="bg-black px-2 py-1 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}
          {/* Admin */}

          {/* Profile */}
          <Link to="/profile">
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>

          {/* Cart */}
          <button
            onClick={() => setDrawerOpen((prev) => !prev)}
            className="relative"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />

            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Search */}
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavDrawerOpen((prev) => !prev)}
            className="md:hidden"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* CART DRAWER */}
      <CartDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={() => setDrawerOpen((prev) => !prev)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setNavDrawerOpen(false)}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>

          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={() => setNavDrawerOpen(false)}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>

            <Link
              to="/collections/all?gender=Women"
              onClick={() => setNavDrawerOpen(false)}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>

            <Link
              to="/collections/all?category=Top Wear"
              onClick={() => setNavDrawerOpen(false)}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>

            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={() => setNavDrawerOpen(false)}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>

            {user && user.role === "admin" && (
              <Link
                to="/admin"
                onClick={() => setNavDrawerOpen(false)}
                className="block text-gray-600 hover:text-black"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
