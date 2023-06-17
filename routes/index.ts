import { Router } from "express";
const router = Router();

/* GET home page. */
router.use("/users", require("./users"));

module.exports = router;
