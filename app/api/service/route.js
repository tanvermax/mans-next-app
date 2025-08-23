// pages/api/service.js
import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("mansDB");
  const serviceCollection = db.collection("service");

  if (req.method === "GET") {
    const services = await serviceCollection.find().toArray();
    return res.status(200).json(services);
  }

  if (req.method === "POST") {
    const service = req.body;
    const result = await serviceCollection.insertOne(service);
    return res.status(201).json(result);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const result = await serviceCollection.deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json(result);
  }

  return res.status(405).end(); // Method Not Allowed
}
