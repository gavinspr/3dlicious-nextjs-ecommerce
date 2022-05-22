import { useToast } from "@chakra-ui/react";
import { ObjectId } from "mongoose";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../models";

export type CartItem = {
  id: ObjectId;
  product: IProduct;
  quantity: number;
  totalPrice: number;
};

export type CartContextType = {
  totalPrice: number;
  totalQuantities: number;
  cartItems: CartItem[];
  isInCart: (product: IProduct) => boolean;
  addCartItem: (product: IProduct) => void;
  removeCartItem: (id: ObjectId) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => useContext(CartContext) as CartContextType;

type CartProviderProps = {
  children: JSX.Element;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);

  const toast = useToast();

  const isInCart = (product: IProduct): boolean => {
    const inCart = cartItems.find((item) => item.id === product?._id);

    return !!inCart;
  };

  const addCartItem = (product: IProduct) => {
    const newItem: CartItem = {
      id: product._id,
      product,
      quantity: 1,
      totalPrice: product.price,
    };

    setCartItems((cartItems) => {
      const isItemInCart: boolean = isInCart(product);

      if (isItemInCart) {
        return cartItems.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                // Update quantity
                quantity: item.quantity + newItem.quantity,
                // Update price
                totalPrice: Number(
                  (
                    (item.quantity + newItem.quantity) *
                    item.product.price
                  ).toFixed(2)
                ),
              }
            : item
        );
      }
      // First time the item is added
      return [...cartItems, { ...newItem, quantity: newItem.quantity }];
    });

    toast({
      title: "Added To Cart!",
      description: `${newItem.product.name} has been added to your cart.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const removeCartItem = (id: ObjectId) => {
    setCartItems((cartItems) =>
      cartItems.reduce((ack: CartItem[], item: CartItem) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        }
        // else {
        return [...ack, item];
        // }
      }, [] as CartItem[])
    );
  };

  useEffect(() => {
    const data = JSON.parse(
      window.localStorage.getItem("3DLICIOUS_CART") || "[]"
    );

    setCartItems(data);
  }, []);

  useEffect(() => {
    const subtotal = cartItems.reduce((ack: number, item: CartItem) => {
      return ack + item.totalPrice;
    }, 0);

    setTotalPrice(Number(subtotal.toFixed(2)));

    const cartTotal = cartItems.reduce((ack: number, item: CartItem) => {
      return ack + item.quantity;
    }, 0);

    setTotalQuantities(cartTotal);

    if (cartItems.length !== 0)
      window.localStorage.setItem("3DLICIOUS_CART", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        totalQuantities,
        cartItems,
        isInCart,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
