import { Router } from "express";
import Donator from "../model/donator";
import Campaing from "../model/campaigns";
const router = Router();
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAIA_API_KEY,
});

const openai = new OpenAIApi(config);

router.post("/run-prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const goal = req.body.campaingn;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const save = new Campaing({
      message: response.data.choices[0].message.content,
      goal: goal,
    });
    save.save();
    res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

// router.get("/list-by-id/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const list = await Donator.findById(id);
//     res.status(200).json({ success: true, data: list });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

// router.post("/create-new", async (req, res) => {
//   try {
//     const donator = await new Donator(req.body);
//     const save = await donator.save(donator);
//     res.status(200).json({ success: true, data: save });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

// //PUT replaces all the existing data
// router.put("/update-donator/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = req.body;
//     const update = await Donator.findOneAndUpdate({ _id: id }, data);
//     res.status(200).json({ success: true, data: update });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

// //PUT replaces only the necessary fields
// router.patch("/update-field/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = req.body;
//     const update = await Donator.findOneAndUpdate({ _id: id }, { $set: data });
//     res.status(200).json({ success: true, data: update });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

// //DELETE replaces only the necessary fields
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = req.body;
//     const update = await Donator.findOneAndUpdate({ _id: id }, { $set: data });
//     res.status(200).json({ success: true, data: update });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

module.exports = router;
