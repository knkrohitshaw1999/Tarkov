import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login.webp";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { mergeCart } from "../redux/slices/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading, error } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  //get redirect parameter and check if it is checkout or something

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");
  useEffect(() => {
    if (!user) return;

    const targetPath = isCheckoutRedirect ? "/checkout" : "/";

    if (guestId && cart?.products?.length > 0) {
      dispatch(mergeCart({ guestId, user }))
        .unwrap()
        .then(() => {
          navigate(targetPath, { state: location.state });
        })
        .catch((err) => {
          console.error(err);
          navigate(targetPath, { state: location.state }); // Navigate even if merge fails
        });
    } else {
      navigate(targetPath, { state: location.state });
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user Logged In", { email, password });
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-[calc(100vh-64px)]">
      <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col justify-center items-center md:items-end p-8 md:p-12 lg:pr-32">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 md:p-10 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-bold">TARKOV</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">WELCOME </h2>
          <p className="text-center mb-6">Enter Your Username And Password</p>
          {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center text-sm mb-4">
              {error}
            </p>
          )}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
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
            className="w-full bg-black text-white p-3 rounded-lg 
            font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Loading..." :"Log In"}
          </button>
          <p className="mt-6 text-center text-sm">
            Don't Have An Account? {""}
            <Link
          to={`/register?redirect=${encodeURIComponent(redirect)}`}
              state={location.state}
              className="text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-2/5 lg:w-1/3 bg-gray-800">
        <div className="h-full  flex flex-col justify-center items-center">
          <img
            src={login}
            alt="Login To Account"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
