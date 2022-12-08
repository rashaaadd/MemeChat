import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error, "Database Connection Error");
    process.exit(1);
  }
};

export default connectDB;
