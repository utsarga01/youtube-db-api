import express from "express";
import connectDB from "./connect.db.js";
import videoRoutes from "./video/video.controller.js";

const app = express();

// to make app understand Json

app.use(express.json());

//database connection

connectDB();



app.use(videoRoutes);

//network port and server

const PORT = 8088;

app.listen(PORT, () => {
  console.log(`App is listening to the port ${PORT}`);
});
