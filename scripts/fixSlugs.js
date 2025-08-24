// import dotenv from "dotenv";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from "url";

// Resolve absolute path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "") });

import dbConnect from "../app/lib/mongodb.js";
import News from "../app/models/News.js";

// slug generation function
function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

async function fixSlugs() {
  await dbConnect();

  const newsItems = await News.find();

  for (let item of newsItems) {
    const cleanSlug = generateSlug(item.headline);
    await News.updateOne({ _id: item._id }, { slug: cleanSlug });
    console.log(`Updated slug: ${item.headline} → ${cleanSlug}`);
  }

  console.log("All slugs updated!");
  process.exit(0);
}

fixSlugs();
