import { model, models, ObjectId, Schema } from 'mongoose'

// todo: relate to product category & sub categories
// todo: link to reviews
// nutritional_facts: Record<string, string> | null // todo: make into linking object
// required_supplies: Record<string, string> | null // todo: make into linking object
export interface IProduct {
  _id: ObjectId
  name: string
  slug: string
  product_category: ObjectId | string
  sub_categories: Array<ObjectId | string>
  image_url: string | null
  price: number
  rating: number // out of 5
  review_count: number
  stock_count: number | null
  cook_time: number | null
  servings: number | null
  description: string
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    product_category: {
      type: Schema.Types.ObjectId,
      ref: 'ProductCategory',
      required: true,
    },
    sub_categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true,
      },
    ],
    image_url: { type: String, default: null },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    review_count: { type: Number, required: true, default: 0 },
    stock_count: { type: Number, default: null },
    cook_time: { type: Number, default: null },
    servings: { type: Number, default: null },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

const Product = models.Product || model<IProduct>('Product', productSchema)

export default Product
