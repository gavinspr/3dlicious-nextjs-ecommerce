import { ObjectId } from 'mongoose'
import { ISubCategory, SubCategory } from '../models'

export async function createSubCategoryByName(
  name: string,
  parentCategoryId: ObjectId,
) {
  try {
    const lastSubCategory = await SubCategory.findOne(
      {},
      {},
      { sort: { index: -1 } },
    ).exec()

    const newIndex: number = lastSubCategory ? lastSubCategory.index + 1 : 1

    const newSubCategory: ISubCategory = await SubCategory.create({
      name,
      slug: name.toLowerCase(),
      image_url: null,
      index: newIndex,
      parent_category_id: parentCategoryId,
    })

    return newSubCategory
  } catch (error) {
    console.log(error)
    throw new Error('Error creating sub category')
  }
}
