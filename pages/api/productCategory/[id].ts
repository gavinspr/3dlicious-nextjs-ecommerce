import { NextApiRequest, NextApiResponse } from "next";
import ProductCategory, { IProductCategory } from "../../../models/ProductCategory";
import dbConnect from "../../../utils/mongo";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<IProductCategory>>) {

  const { method, query: { id } } = req

  const body: IProductCategory = JSON.parse(req.body)

  await dbConnect()

  switch (method) {
    case "GET":
      // todo: [id]
      const productCategories: Array<IProductCategory> = await ProductCategory.find()

      if (!productCategories)

        res.status(200).json(productCategories);
      break;

    case "PUT":
      try {
        const productCategory  = await ProductCategory.findById(id)

        // Validate
        if (!productCategory) throw 'Product Category Not Found'
        if (productCategory.name !== body.name && await ProductCategory.findOne({ name: body.name })) {
          throw `Product Category ${body.name} already exist`
        }

        Object.assign(productCategory, body)

        await productCategory.save()

        res.status(200).json(productCategory)
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