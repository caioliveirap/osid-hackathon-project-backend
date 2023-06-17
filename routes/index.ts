import { Router } from "express";
const router = Router();

/* GET home page. */
router.use("/users", require("./users"));
router.use("/donators", require("./donators"));
router.use("/auth", require("./auth"));

module.exports = router;
