import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/mongo'
import { Product, IProduct } from '../../../models'
import { PRODUCT_TYPES } from '../../../constants'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    body,
    method,
    query: { product_type },
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      let products: Array<IProduct> = []

      if (req.query.subCategory) {
        // If preview param passed only return 10 products
        if (req.query.preview) {
          products = await Product.find({
            sub_categories: req.query.subCategory,
          })
            .sort({ createdAt: -1 })
            .limit(10)
          return res.status(200).json(products)
        }

        products = await Product.find({ sub_categories: req.query.subCategory })
        return res.status(200).json(products)
      }

      products = await Product.find()
      res.status(200).json(products)
      break
    case 'POST':
      //todo:

      break

    default:
      res.status(405).json({ message: 'Method Not Allowed' })
      break
  }
}
