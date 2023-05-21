import { NextApiRequest, NextApiResponse } from 'next'
import ProductCategory, {
  IProductCategory,
} from '../../../models/ProductCategory'
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
      const productCategory: IProductCategory | null = await ProductCategory.findById(
        id,
      )

      if (!productCategory) {
        res.status(404).json({ message: 'Product Category does not exist' })
      }

      res.status(200).json(productCategory)
      break

    case 'PUT':
      const body: IProductCategory = JSON.parse(req.body)

      try {
        const productCategory = await ProductCategory.findById(id)

        // Validate
        if (!productCategory) throw 'Product Category Not Found'
        if (
          productCategory.name !== body.name &&
          (await ProductCategory.findOne({ name: body.name }))
        ) {
          throw `Product Category ${body.name} already exist`
        }

        Object.assign(productCategory, body)

        await productCategory.save()

        res.status(200).json(productCategory)
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
