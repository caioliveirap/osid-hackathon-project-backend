import { model, models, Schema } from "mongoose";

const campaignSchema = new Schema(
  {
    message: String,
    goal: String,
  },
  { timestamps: true }
);

const Campaing = models.Campaing || model("Campaing", campaignSchema);

export default Campaing;
