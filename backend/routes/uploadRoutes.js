const exprees = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamfier = require("streamifier");

require("dotenv").config();
const router = exprees.Router();

//Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    //Function to handle the upload stream to Cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "tarkov_uploads" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          },
        );
        //use Streamifier to convert buffer to stream and pipe it to Cloudinary
        streamfier.createReadStream(file.buffer).pipe(stream);
      });
    };
    // call the stramUpload function
    const result = await streamUpload(req.file.buffer);

    //Respond with the uploaded image URL
    res.json({ imageUrl: result.secure_url });





  } catch (error) {
    console.error("Error in upload route:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;