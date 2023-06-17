import express from "express";
require("dotenv").config();
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const credentials = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err: any) => console.log(err));
const app = express();

app.use(express.json({ limit: "100mb" }));

app.use("/", require("../routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
