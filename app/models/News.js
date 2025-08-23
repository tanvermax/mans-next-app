import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  headline: String,
  description: String,
  photoUrl:{type:String},
  slug: { type: String, unique: true },
});

export default mongoose.models.News || mongoose.model("News", NewsSchema,"newspost");
