import express from "express";
import Video from "./video.model.js";
import mongoose from "mongoose";

const router = express.Router();

// ? add video

router.post("/video/add", async (req, res) => {
  const newVideo = req.body;

  //insert video

  await Video.create(newVideo);
  return res.status(201).send({ message: "Video is added successfully." });
});

//get video list
router.get("/video/list", async (req, res) => {
  const videos = await Video.find();
  return res.status(200).send({ message: "success", videoList: videos });
});

//get video detail by Id

router.get("/video/detail/:id", async (req, res) => {
  const videoId = req.params.id;

  const isValidId = mongoose.isValidObjectId(videoId);

  if (!isValidId) {
    return res.status(400).send({ message: "Invalid video Id" });
  }

  const video = await Video.findOne({ _id: videoId });

  if (!video) {
    return res.status(404).send({ message: "Video does not exist." });
  }
  return res
    .status(200)
    .send({ message: "video found..", videoDetail: "video" });
});

export default router;
