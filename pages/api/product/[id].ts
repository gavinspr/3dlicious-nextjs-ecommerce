import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { Product } from "../../../models";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const product = await Product.findOne({
        slug: id,
      });

      if (!product) {
        // todo:
        // throw new NotFoundException('Product not found.');
        console.log("no");
      }

      res.status(200).json(product);
      break;

    default:
      break;
  }
}
