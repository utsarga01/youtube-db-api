import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://regmiutsarga7:Nipani321@cluster0.kpjiesk.mongodb.net/kec_youtube?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connection established.");
  } catch (error) {
    console.log("DB connection failed..");

    console.log(error.message);
  }
};

export default connectDB;
