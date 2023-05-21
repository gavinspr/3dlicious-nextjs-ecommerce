import { model, models, ObjectId, Schema } from 'mongoose'

export interface ISubCategory {
  _id: ObjectId
  name: string
  slug: string
  image_url: string | null
  index: number
  parent_category_id: ObjectId
}

const subCategorySchema = new Schema<ISubCategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image_url: { type: String, default: null },
    index: { type: Number, required: true },
    parent_category_id: {
      type: Schema.Types.ObjectId,
      ref: 'ProductCategory',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const SubCategory =
  models.SubCategory || model<ISubCategory>('SubCategory', subCategorySchema)

export default SubCategory
