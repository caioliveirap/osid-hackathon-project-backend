import { Router } from "express";
import Donator from "../model/donator";
const router = Router();

/* GET users listing. */
router.get("/list", async (req, res) => {
  try {
    res.status(200).json({ ok: "true" });
  } catch (error: any) {
    res.status(400).send(new Error(error));
  }
});

router.post("/add-users", async (req, res) => {
  try {
    const donator = await new Donator(req.body);
    const save = await donator.save(donator);
    res.status(200).json({ success: true, data: save });
  } catch (error: any) {
    res.status(400).send({ error: new Error(error), success: false });
  }
});

module.exports = router;
