import { Router } from "express";
const router = Router();

/* GET users listing. */
router.get("/list", async (req, res) => {
  try {
    res.status(200).json({ ok: "true" });
  } catch (error: any) {
    res.status(400).send(new Error(error));
  }
});

module.exports = router;
