// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongo";
import { Category } from "../../models";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  const product = await Category.create(req.body);
  // const product = await Category.find();
  console.log(product);
  res.status(200).json({ name: "John Doe" });
}
