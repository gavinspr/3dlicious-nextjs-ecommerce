import { IProductCategory } from "../models/ProductCategory";

type OptionTypes = {
  byIndex?: boolean;
};

const fetchProductCategories = async (
  setProductCategories: Function,
  options?: OptionTypes
) => {
  const response: Response = await fetch("/api/productCategory");

  const data: Array<IProductCategory> = await response.json();

  if (options?.byIndex)
    data.sort((a: IProductCategory, b: IProductCategory) => a.index - b.index);

  setProductCategories(data);
};

export default fetchProductCategories;
