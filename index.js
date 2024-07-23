import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());

const images = [
  "https://www.team-bhp.com/forum/attachments/motorbikes/966810d1344414263-steampunk-holmes-bike-putsch-racing-widowmakr655x483.jpg",
  "https://i.pinimg.com/originals/c5/2c/46/c52c46457adb07fa2bfa9cb62b36dbd8.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadp-cg8Fj4TEcObw6-7UZK6NwL9Vw6EtHlw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieybYthzC8kIhcthRwuXPw7bVM_dpsIk4qA&s",
];

app.get("/", function (req, res) {
  res.json(images);
});

app.listen(8080, function () {
  console.log("server running on port 8080");
});
