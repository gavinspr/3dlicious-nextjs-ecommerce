import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { Product, IProduct } from "../../../models";
import { fetchProductByProductCategoryId } from "../../../controllers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      let products: Array<IProduct> = [];

      const page: number = req.query.page ? Number(req.query.page) : 1;
      const limit: number = 10;
      const skip: number = (page - 1) * limit;

      // ! filters will affect these calculations
      const currentPage: number = Math.floor(skip / limit) + 1;
      const totalCount: number = await Product.countDocuments();
      const totalPages: number = Math.ceil(totalCount / limit);

      // todo: add to controller
      // todo: add pagination
      // todo: updated filter by subcategory method
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
        products = await fetchProductByProductCategoryId(
          req.query.productCategory as string,
          skip,
          limit,
          "latest"
        );

        return res
          .status(200)
          .json({ products, currentPage, totalCount, totalPages });
      }

      products = await Product.find().skip(skip).limit(limit);
      res.status(200).json({ products, currentPage, totalCount, totalPages });
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
