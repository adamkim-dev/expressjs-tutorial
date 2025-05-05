import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGOOSE_URL =
    "mongodb+srv://express:Express123@cluster0.s1uftcd.mongodb.net/express";

  await mongoose.connect(MONGOOSE_URL).then(() => {
    console.log("Database Connected");
  });
};
