import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/mongo'
import SubCategory, { ISubCategory } from '../../../models/SubCategory'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        let subCategories: Array<ISubCategory> = []

        if (req.query.parentId) {
          subCategories = await SubCategory.find({
            parent_category_id: req.query.parentId,
          })
          return res.status(200).json(subCategories)
        }

        subCategories = await SubCategory.find()
        res.status(200).json(subCategories)
        break
      } catch (error) {
        console.log(error, 'e')
        res.status(400).json(error)
      }
    case 'POST':
      try {
        const body = JSON.parse(req.body)

        const subcategory: ISubCategory = await SubCategory.create(body)
        res.status(201).json(subcategory)
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
