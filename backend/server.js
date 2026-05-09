const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load env variables
dotenv.config();

// DB connection
const connectDB = require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoute = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");
const paypalRoutes = require("./routes/paypalRoutes");

const app = express();

// ✅ Connect DB
connectDB();

// ✅ Middleware
app.use(express.json());

// ✅ CORS (important for local + production)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      process.env.FRONTEND_URL, // deployed frontend (set in .env)
    ],
    credentials: true,
  })
);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Welcome To Tarkov API!");
});

// ✅ API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/subscribe", subscribeRoute);
app.use("/api/paypal", paypalRoutes);

// ✅ Admin Routes
app.use("/api/admin", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

// ✅ Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

// ✅ Start server ONLY for local
const PORT = process.env.PORT || 9000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

// ✅ Export for Vercel
module.exports = app;