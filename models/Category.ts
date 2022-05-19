import { model, models, Schema } from "mongoose";

export interface ICategory {
  name: string;
  slug: string;
  product_type: string;
  image: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    product_type: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Category =
  models.Category || model<ICategory>("Category", categorySchema);

export default Category;
