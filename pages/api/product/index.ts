import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { Product, IProduct } from "../../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      let products: Array<IProduct> = [];

      if (req.query.subCategory) {
        // If preview param passed only return 10 products
        if (req.query.preview) {
          products = await Product.find({
            sub_categories: req.query.subCategory,
          })
            .sort({ createdAt: -1 })
            .limit(10);
          return res.status(200).json(products);
        }

        products = await Product.find({
          sub_categories: req.query.subCategory,
        });
        return res.status(200).json(products);
      }

      if (req.query.productCategory) {
        // If preview param passed only return 10 products
        if (req.query.latest) {
          products = await Product.find({
            product_category: req.query.productCategory,
          }).sort({ createdAt: -1 });

          return res.status(200).json(products);
        }

        products = await Product.find({
          product_category: req.query.productCategory,
        });
        return res.status(200).json(products);
      }

      products = await Product.find();
      res.status(200).json(products);
      break;
    case "POST":
      try {
        const body = JSON.parse(req.body);
        const product = await Product.create(body);

        res.status(201).json(product);
      } catch (error) {
        console.log(error, "e");
        res.status(400).json(error);
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
