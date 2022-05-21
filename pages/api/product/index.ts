import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { Product, IProduct } from "../../../models";
import { PRODUCT_TYPES } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const {
    body,
    method,
    query: { product_type },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      //todo: validate query

      const products: IProduct[] = PRODUCT_TYPES.includes(
        product_type as string
      )
        ? await Product.find({
            product_type: product_type,
          })
        : await Product.find({
            categories: product_type,
          });

      if (!products) {
        // todo:
        // throw new NotFoundException('Product not found.');
        console.log("no");
      }

      res.status(200).json(products);
      break;
    case "POST":
      let response;

      try {
        response = await Product.create(body);
      } catch (err) {
        console.log(err);
        response = err;
      }

      res.status(201).json(response);

      break;

    default:
      break;
  }
}
