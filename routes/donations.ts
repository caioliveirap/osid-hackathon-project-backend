import { Router } from "express";
import Donator from "../model/donator";
const router = Router();

// router.get("/list", async (req, res) => {
//   try {
//     const list = await Donator.find().exec();
//     res.status(200).json({ success: true, data: list });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

// router.get("/list-by-id/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const list = await Donator.findById(id);
//     res.status(200).json({ success: true, data: list });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

router.post("/create-new", async (req, res) => {
  try {
    // const donator = await new Donator(req.body);
    const checkDonatorExistance = await Donator.findOne({
      document: req.body.donator.document,
    });
    console.log(req.body);
    if (!checkDonatorExistance) {
      const newDonator = new Donator(req.body.donator);
      await newDonator.save();
    }
    // console.log(checkDonatorExistance);

    // const save = await dona~tor.save(donator);
    res.status(200).json({ success: true, data: checkDonatorExistance });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

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
//     const deleteDonator = await Donator.findByIdAndDelete({ _id: id }).exec();

//     res.status(200).json({ success: true, data: deleteDonator });
//   } catch (error: any) {
//     res.status(400).send({ error: error.message, success: false });
//   }
// });

module.exports = router;
