import express, { res } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());

const images = [];

app.get("/", function (req, res) {
  res.json("this is my root");
});
app.listen(8080, function () {
  console.log("server running on port 8080");
});
