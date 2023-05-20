import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import SubCategory, { ISubCategory } from "../../../models/SubCategory";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query: { parentId } } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      if (parentId) {
        const subCategories: Array<ISubCategory> = await SubCategory.find({ parent_category_id: parentId })
        return res.status(200).json(subCategories)
      }

      const subCategories: Array<ISubCategory> = await SubCategory.find()
      res.status(200).json(subCategories);
      break;
    case "POST":
      const body = JSON.parse(req.body)

      try {
        const subcategory: ISubCategory = await SubCategory.create(body)
        res.status(201).json(subcategory)
      } catch (error: any) {
        console.log(error, 'e')
        res.status(400).json(error)
      }

      break;

    default:
      break;
  }
}

