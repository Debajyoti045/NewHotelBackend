const connectToMongo = require("./db");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const startServer = async () => {
  try {
    const port = process.env.PORT || 3000;
    await connectToMongo();
    app.get("*", (req, res) => {
      //console.log("Hi")
      res.status(404).json({ error: "NOT FOUND!" });
    });
    app.listen(port);
  } catch (error) {console.log(error)}
};

startServer();