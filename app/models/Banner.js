import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  image: String,
  description: String,
  heading:{type:String},
  slug: { type: String, unique: true },
});

export default mongoose.models.Banner || mongoose.model("Banner", BannerSchema,"banner");
