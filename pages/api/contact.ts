// File: pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import transporter from '../../lib/nodemailer';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not defined in environment variables");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const database = client.db('mydatabase');
    const collection = database.collection('contacts');

    const contact = req.body;
    const result = await collection.insertOne(contact);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: contact.email,
      subject: 'Thank you for contacting us',
      text: `Hi ${contact.firstName} ${contact.lastName},\n\nWe have received your message and will get back to you within 24 hours.\n\nOrganization: ${contact.organization}\nMessage: ${contact.message}\n\nBest regards,\nGreen Poly Source Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Information saved and email sent successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error saving information or sending email', error });
  }
}