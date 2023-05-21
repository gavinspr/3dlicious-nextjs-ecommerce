import { model, models, ObjectId, Schema } from 'mongoose'

export interface IProductCategory {
  _id: ObjectId
  name: string
  slug: string
  index: number
  image_url: string | null
}

const productCategorySchema = new Schema<IProductCategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    index: { type: Number, required: true },
    image_url: { type: String, default: null },
  },
  {
    timestamps: true,
  },
)

const ProductCategory =
  models.ProductCategory ||
  model<IProductCategory>('ProductCategory', productCategorySchema)

export default ProductCategory
