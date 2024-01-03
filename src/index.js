// require("dotenv").config();
import "dotenv/config";
import connectDB from "./db/index.js";

connectDB();

// comment
// use IIFEs

// (async () => {
//   try {
//     const dbInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );

//     console.log(
//       "Successfully connected to database",
//       dbInstance.connection.host
//     );
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();
