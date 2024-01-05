// require("dotenv").config();
import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("DB connection Error", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log("app is listening on port", process.env.PORT);
    });
  })
  .catch((error) => console.error("Error: database connection failed", error));





  
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
