import { IProductCategory, ProductCategory } from '../models'

export async function getProductCategoryBySlug(
  slug: string,
): Promise<Array<IProductCategory>> {
  const productCategories: Array<IProductCategory> = []

  const category: IProductCategory | null = await ProductCategory.findOne({
    slug: slug,
  })

  if (category) productCategories.push(category)

  return productCategories
}

export async function createProductCategoryByName(
  name: string,
): Promise<IProductCategory> {
  try {
    const lastCategory = await ProductCategory.findOne(
      {},
      {},
      { sort: { index: -1 } },
    ).exec()

    const newIndex: number = lastCategory ? lastCategory.index + 1 : 1

    const newProductCategory: IProductCategory = await ProductCategory.create({
      name,
      slug: name.toLowerCase(),
      image_url: null,
      index: newIndex,
    })

    return newProductCategory
  } catch (error) {
    console.log(error)
    throw new Error('Error creating product category')
  }
}
