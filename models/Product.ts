import { model, models, Schema } from "mongoose";

interface IProduct {
  name: string;
  slug: string;
  categories: string[];
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  stockCount: number;
  cookTime: number;
  servings: number;
  nutritionalFacts: string;
  requiredSupplies: string[];
  description: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    categories: { type: [String], required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    reviewCount: { type: Number, required: true, default: 0 },
    stockCount: { type: Number, required: true, default: 0 },
    cookTime: { type: Number, required: true },
    servings: { type: Number, required: true },
    nutritionalFacts: { type: String, required: true },
    requiredSupplies: { type: [String], required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model<IProduct>("Product", productSchema);

export default Product;
