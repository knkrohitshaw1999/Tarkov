const express = require("express");
const router = express.Router();
const axios = require("axios");

const getPayPalAccessToken = async () => {
  const response = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: process.env.PAYPAL_CLIENT_ID,
        password: process.env.PAYPAL_SECRET,
      },
    }
  );

  return response.data.access_token;
};

router.post("/capture", async (req, res) => {
  try {
    const { orderID } = req.body;

    const accessToken = await getPayPalAccessToken();

    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ message: "Capture failed" });
  }
});

module.exports = router;