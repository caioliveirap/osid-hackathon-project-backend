import { model, models, Schema } from "mongoose";

const promptsSchema = new Schema(
  {
    title: String,
    description: String,
    prompt: String,
  },
  { timestamps: true }
);

const Prompts = models.Prompts || model("Prompts", promptsSchema);

export default Prompts;
