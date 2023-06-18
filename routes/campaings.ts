import { Router } from "express";
import Campaing from "../model/campaigns";
const router = Router();

router.get("/list", async (req, res) => {
  try {
    const list = await Campaing.find().exec();
    res.status(200).json({ success: true, data: list });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

module.exports = router;
