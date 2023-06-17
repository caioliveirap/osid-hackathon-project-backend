import express from "express";
require("dotenv").config();

const app = express();

app.use(express.json({ limit: "100mb" }));

app.use("/", require("../routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
