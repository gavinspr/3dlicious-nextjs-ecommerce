import {
  IProduct,
  IProductCategory,
  ISubCategory,
  Product,
  ProductCategory,
  SubCategory,
} from '../models'
import { productCsvToJson } from '../helpers'
import { createProductCategoryByName } from './productCategoryController'
import { createSubCategoryByName } from './subCategoryController'
import { ObjectId } from 'mongoose'

export async function createProductsFromCSV(
  csv: string,
): Promise<Array<IProduct>> {
  try {
    //todo: handle for duplicate items
    const products: Array<IProduct> = productCsvToJson(csv)
    const createdProducts: Array<IProduct> = []

    for (const product of products) {
      // Fetch ProductCategory data by string name
      let productCategory: IProductCategory | null = await ProductCategory.findOne(
        {
          name: product.product_category,
        },
      )

      // If ProductCategory does not exist create it
      if (!productCategory) {
        const newProductCategory: IProductCategory = await createProductCategoryByName(
          product.product_category as string,
        )
        productCategory = newProductCategory
      }

      const subCategories: Array<ObjectId> = []

      for (const category of product.sub_categories) {
        // Fetch SubCategory data by string name
        let subCategory: ISubCategory | null = await SubCategory.findOne({
          name: category,
        })

        // If SubCategory does not exist create it
        if (!subCategory) {
          subCategory = await createSubCategoryByName(
            category as string,
            productCategory._id,
          )
        }

        subCategories.push(subCategory._id)
      }

      product.product_category = productCategory._id
      product.sub_categories = subCategories

      const createdProduct = await Product.create(product)
      createdProducts.push(createdProduct)
    }

    return createdProducts
  } catch (error) {
    console.error(error)
    throw new Error('Error creating products from CSV')
  }
}
