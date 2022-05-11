const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

mongoose.connect();

app.use(express.json());
app.use(cors());

app.get("/read", (req, re) => {});
app.post("/create", (req, re) => {});
app.put("/update:id", (req, re) => {});
app.delete("/delete:id", (req, re) => {});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Yeah, our server is running in ${port} port!`);
});
