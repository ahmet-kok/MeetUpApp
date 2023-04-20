import { MongoClient } from "mongodb";

const uri = "mongodb+srv://ahmet:soWjip-9vehve-nemwox@ahmet.zjjevax.mongodb.net/meetups?retryWrites=true&w=majority";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
