import { Router } from "express";
const router = Router();
const admin = require("firebase-admin");
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

router.post("/register-email", async (req, res) => {
  try {
    const userResponse = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
      emailVerified: false,
      disabled: false,
    });
    res.status(200).json({ success: true, data: userResponse });
  } catch (error: any) {
    res.status(400).send({ error: error.message, success: false });
  }
});

// router.post("/login", async (req, res) => {
//   const auth = getAuth();
//   const userResponse = await signInWithEmailAndPassword(
//     auth,
//     req.body.email,
//     req.body.password
//   )
//     .then((userCredential) => {
//       const user = userCredential.user;
//       res.status(200).json({ success: true, data: user });
//     })
//     .catch((error) => {
//       res.status(400).send({ error: error.message, success: false });
//     });
//   // try {
//   //   const userResponse = await admin.auth().signInWithEmailAndPassword({
//   //     email: req.body.email,
//   //     password: req.body.password,
//   //   });
//   //   res.status(200).json({ success: true, data: userResponse });
//   // } catch (error: any) {
//   //   res.status(400).send({ error: error.message, success: false });
//   // }
// });

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
