import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting ...");
    return;
  }

  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }
    mongoose.connect(MONGODB_URI, {
      dbName: "mediservice",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err) {
    console.log("error", err);
    throw new Error(`Error: ${err.message}`);
  }
};

export default connect;
