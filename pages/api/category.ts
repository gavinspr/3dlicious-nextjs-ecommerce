import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongo";
import { Category, ICategory } from "../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategory[]>
) {
  const {
    body,
    method,
    query: { product_type },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const categories: ICategory[] = await Category.find({
        product_type,
      });

      if (!categories) {
        //todo: 
        // throw new NotFoundException('Category not found.');
        console.log("no");
      }

      res.status(200).json(categories);
      break;
    case "POST":
      let response;

      try {
        response = await Category.create(body);
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

