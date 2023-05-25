import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { Product } from "../../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const product = await Product.findOne({
        slug: req.query.slug,
      });

      if (!product) {
        // todo:
        // throw new NotFoundException('Product not found.');
      }

      res.status(200).json(product);
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
