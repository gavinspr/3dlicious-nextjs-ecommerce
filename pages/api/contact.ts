import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import "dotenv/config";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message }: ContactForm = req.body;

  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: email,
      to: process.env.EMAIL,
      subject: `Contact Form from ${name}`,
      html: `
      <h3>New Message From: ${name}</h3>
      <p>Email: ${email}</p>
      <p>${message}</p>`,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Error sending message");
      }

      console.log(info);
      return res.status(201).json("Message Sent");
    });
  }
}
