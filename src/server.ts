import express from "express";
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(process.env.MONGODB_URI, (err: any, client: any) => {
  console.log("db connected");
});
const app = express();

app.use(express.json({ limit: "100mb" }));

app.use("/", require("../routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
