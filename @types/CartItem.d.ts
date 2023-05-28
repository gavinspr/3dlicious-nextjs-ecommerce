import { IProduct } from "../models";

export type CartItem = {
  id: ObjectId;
  product: IProduct;
  quantity: number;
};
