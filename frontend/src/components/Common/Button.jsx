import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}) => {
  const base =
    "inline-flex items-center justify-center rounded font-medium transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;