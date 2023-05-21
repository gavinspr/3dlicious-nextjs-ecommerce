import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/mongo'
import { createProductsFromCSV } from '../../../controllers'

// todo: need to create new subcategories or product categories if product created and  cats do not exist; need to do on single post as well
// todo: switch to excel instead of csv

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect()

  if (req.method === 'POST') {
    try {
      const { body } = req

      const createdProducts = await createProductsFromCSV(body)

      res.status(200).json({
        message: 'Successfully uploaded CSV to MongoDB',
        products: createdProducts,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error saving CSV data to MongoDB.' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
