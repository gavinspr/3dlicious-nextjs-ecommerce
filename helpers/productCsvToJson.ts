import { IProduct } from '../models'

export const productCsvToJson = (csvData: string) => {
  const [keys, ...rest] = csvData
    .trim()
    .split('\n')
    .map((item: any) => item.trimStart().split(','))

  const products: Array<IProduct> = rest.map((values: string[]) => {
    const product: any = {}
    keys.forEach((key: string, index: number) => {
      if (key === 'sub_categories') {
        product[key as keyof IProduct] = values[index]
          ? values[index].split(';').map((category: string) => category.trim())
          : []
      } else if (
        key === 'price' ||
        key === 'rating' ||
        key === 'review_count' ||
        key === 'stock_count' ||
        key === 'cook_time' ||
        key === 'servings'
      ) {
        product[key as keyof IProduct] = values[index]
          ? parseInt(values[index])
          : null
      } else {
        product[key as keyof IProduct] = values[index]
      }
    })
    return product as IProduct
  })

  return products
}
