import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../database/models/post.js";

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

//GET ALL post requests
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (e) {
    res.status(500).json({ success: false, message: "error" });
  }
});

//POST ALL post requests
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const PhotoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: PhotoUrl.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (e) {
    res.status(500).json({ success: false, message: "Unable to create post" });
  }
});

export default router;
