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
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  //get redirect parameter and check if it is checkout or something

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user Logged In", { email, password });
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-bold">TARKOV</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">WELCOME </h2>
          <p className="text-center mb-6">Enter Your Username And Pawsword</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg 
            font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Loading..." :"Sign In"}
          </button>
          <p className="mt-6 text-center text-sm">
            Dont Have An Account? {""}
            <Link
          to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
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
