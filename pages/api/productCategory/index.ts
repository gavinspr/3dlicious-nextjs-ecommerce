import { NextApiRequest, NextApiResponse } from 'next'
import { getProductCategoryBySlug } from '../../../controllers'
import ProductCategory, {
  IProductCategory,
} from '../../../models/ProductCategory'
import dbConnect from '../../../utils/mongo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        let productCategories: Array<IProductCategory> = []

        if (req.query.slug) {
          productCategories = await getProductCategoryBySlug(
            req.query.slug as string,
          )

          return res.status(200).json(productCategories)
        }

        productCategories = await ProductCategory.find()

        // Sort ProductCategories by index
        if (req.query.byIndex) {
          productCategories.sort(
            (a: IProductCategory, b: IProductCategory) => a.index - b.index,
          )
        }

        res.status(200).json(productCategories)
      } catch (error) {
        console.log(error, 'e')
        res.status(400).json(error)
      }
      break
    case 'POST':
      const body = JSON.parse(req.body)

      try {
        const productCategory = await ProductCategory.create(body)
        res.status(201).json(productCategory)
      } catch (error) {
        console.log(error, 'e')
        res.status(400).json(error)
      }
      break
    default:
      res.status(405).json({ message: 'Method Not Allowed' })
      break
  }
}
