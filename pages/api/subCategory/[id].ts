import { NextApiRequest, NextApiResponse } from 'next'
import { ISubCategory, SubCategory } from '../../../models'
import dbConnect from '../../../utils/mongo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id },
  } = req

  await dbConnect()

  switch (req.method) {
    case 'GET':
      console.log(id, '[')
    const subCategory: ISubCategory | null = await SubCategory.findById(id)

    if (!subCategory) {
      res.status(404).json({ message: 'Sub Category does not exist' })
    }

    res.status(200).json(subCategory)
    break

    case 'PUT':
      const body: ISubCategory = JSON.parse(req.body)

      try {
        const subCategory = await SubCategory.findById(id)

        // Validate
        if (!subCategory) throw 'Sub Category does not exist'

        if (
          subCategory.name !== body.name &&
          (await SubCategory.findOne({ name: body.name }))
        ) {
          throw `Sub Category ${body.name} already exist`
        }

        Object.assign(subCategory, body)

        await subCategory.save()

        res.status(200).json(subCategory)
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
