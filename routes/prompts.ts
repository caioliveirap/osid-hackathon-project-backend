import { Router } from "express";
import Donator from "../model/donator";
import Prompts from "../model/prompts";
const router = Router();

router.get("/list", async (req, res) => {
  try {
    const list = await Prompts.find().exec();
    res.status(200).json({ success: true, data: list });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

router.get("/list-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const list = await Prompts.findById(id);
    res.status(200).json({ success: true, data: list });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

router.post("/create-new", async (req, res) => {
  try {
    const prompt = await new Prompts(req.body);
    const save = await prompt.save(prompt);
    res.status(200).json({ success: true, data: save });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

//PUT replaces all the existing data
router.put("/update-prompt/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const update = await Prompts.findOneAndUpdate({ _id: id }, data);
    res.status(200).json({ success: true, data: update });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

//PUT replaces only the necessary fields
router.patch("/update-field/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const update = await Prompts.findOneAndUpdate({ _id: id }, { $set: data });
    res.status(200).json({ success: true, data: update });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

//DELETE replaces only the necessary fields
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const deletePrompt = await Prompts.findByIdAndDelete({ _id: id }).exec();
    res.status(200).json({ success: true, data: deletePrompt });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

module.exports = router;
