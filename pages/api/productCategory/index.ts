import { NextApiRequest, NextApiResponse } from "next";
import ProductCategory, { IProductCategory } from "../../../models/ProductCategory";
import dbConnect from "../../../utils/mongo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { method, } = req

  await dbConnect()

  switch (method) {
    case "GET":
      const productCategories: Array<IProductCategory> = await ProductCategory.find()
      res.status(200).json(productCategories);
      break;

    case "POST":
      const body = JSON.parse(req.body)

      try {
        const productCategory = await ProductCategory.create(body)
        res.status(201).json(productCategory)
      } catch (error: any) {
        console.log(error, 'e')
        res.status(400).json(error)
      }

      break;

    default:
      //todo:
      break;
  }
}