import { model, models, Schema } from "mongoose";

const donatorSchema = new Schema(
  {
    name: String,
    type: String,
    amount: Number,
    donator_id: String,
  },
  { timestamps: true }
);

const Donator = models.Donator || model("Donator", donatorSchema);

export default Donator;
