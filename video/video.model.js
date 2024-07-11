import mongoose from "mongoose";

//set rule/schema

const videoSchema = new mongoose.Schema({
  videoCreatorName: String,
  videoDuration: String,
  videoCategory: String,
  uploadDate: String,
});

//create table model/collection

const Video = mongoose.model("Video", videoSchema);

export default Video;
