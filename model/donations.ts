import { model, models, Schema } from "mongoose";

const donationSchema = new Schema(
  {
    type: String,
    origin: String,
    donator_type: String,
    resource: String,
    description: String,
    resource_details: Object,
  },
  { timestamps: true }
);

const Donations = models.Donations || model("Donations", donationSchema);

export default Donations;
