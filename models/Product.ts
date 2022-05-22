import { model, models, ObjectId, Schema } from "mongoose";

export interface IProduct {
  _id: ObjectId;
  name: string;
  slug: string;
  product_type: string;
  categories: string[];
  image: string;
  price: number;
  rating: number;
  review_count: number;
  stock_count: number | null;
  cook_time: number | null;
  servings: number | null;
  nutritional_facts: string | null;
  required_supplies: string[] | null;
  description: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    product_type: { type: String, required: true },
    categories: { type: [String], required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    review_count: { type: Number, required: true, default: 0 },
    stock_count: { type: Number, required: true, default: 0 },
    cook_time: { type: Number, required: true },
    servings: { type: Number, required: true },
    nutritional_facts: { type: String, required: true },
    required_supplies: { type: [String], required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model<IProduct>("Product", productSchema);

export default Product;
