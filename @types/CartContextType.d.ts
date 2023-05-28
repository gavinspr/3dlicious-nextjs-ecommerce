import { CartItem } from "./CartItem";

export type CartContextType = {
  totalPrice: number;
  totalQuantities: number;
  cartItems: Array<CartItem>;
  isInCart: (product: IProduct) => boolean;
  addCartItem: (product: IProduct) => void;
  removeCartItem: (id: ObjectId) => void;
};
