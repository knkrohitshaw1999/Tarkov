import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import registerImg from "../assets/register.webp";
import { registerUser } from "../redux/slices/authSlice";
import {mergeCart} from "../redux/slices/cartSlice"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user, guestId, loading, error } = useSelector(
    (state) => state.auth
  );
  const { cart } = useSelector((state) => state.cart);

  const redirect =
    new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (!user) return;

    if (guestId && cart?.products?.length > 0) {
      dispatch(mergeCart({ guestId, user }))
        .unwrap()
        .then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        })
        .catch((err) => console.error(err));
    } else {
      navigate(isCheckoutRedirect ? "/checkout" : "/");
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    await dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-[calc(100vh-64px)]">
      <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col justify-center items-center md:items-end p-8 md:p-12 lg:pr-32">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 md:p-10 rounded-lg border shadow-sm"
        >
          <h2 className="text-xl font-bold text-center mb-4">TARKOV</h2>

          <h2 className="text-2xl font-bold text-center mb-2">WELCOME</h2>
          <p className="text-center mb-6">
            Enter your username and password
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-2/5 lg:w-1/3 bg-gray-800">
        <img
          src={registerImg}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;