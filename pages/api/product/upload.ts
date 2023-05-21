import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/mongo'
import { Product } from '../../../models'
import { productCsvToJson } from '../../../helpers'

// todo: need to create new subcategories or product categories if product created and  cats do not exist; need to do on single post as well

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body, method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const products = productCsvToJson(body)
        // console.log(products)
        const createdProducts = await Product.create(products)

        res.status(200).json({
          message: 'Successfully uploaded CSV to MongoDB',
          products: createdProducts,
        })
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error saving CSV data to MongoDB.' })
      }

      break

    default:
      break
  }
}
