const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

//Cennect To MongoDB
mongoose.connect(process.env.MONGO_URI);

//Function to seed data

const seedData = async () => {
  try {
    //Clear Exixting Data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();


    //Create adefault admin User
    const createUser = await User.create({
      name: "Admin",
      email: "rohitkumar@example.com",
      password: "Rohit1999",
      role: "admin",
    });

    //Assign the default user ID to each product

    const userID = createUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });
    //Insert the Product into database
    await Product.insertMany(sampleProducts);
    console.log("Product data seeded SucessFully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
