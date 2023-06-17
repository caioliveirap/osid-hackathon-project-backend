"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "100mb" }));
app.use("/", require("../routes/index"));
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
