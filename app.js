const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-foud");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const tasks = require("./routes/tasks.r.js");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(` Server listening on port  ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
