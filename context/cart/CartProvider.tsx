import React, { useContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { ObjectId } from "mongoose";
import { CartContextType, CartItem } from "../../@types";
import { IProduct } from "../../models";
import CartContext from "./cartContext";

// todo: persist in mongo; with just id/slug and qty

type PropTypes = {
  children: JSX.Element;
};
export const useCartContext = () => useContext(CartContext) as CartContextType;

const CartProvider = ({ children }: PropTypes) => {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);

  const toast = useToast();

  useEffect(() => {
    const data = JSON.parse(
      window.localStorage.getItem("3DLICIOUS_CART") || "[]"
    );

    setCartItems(data);
  }, []);

  useEffect(() => {
    const subtotal: number = cartItems.reduce((ack: number, item: CartItem) => {
      return ack + item.quantity * item.product.price;
    }, 0);

    setTotalPrice(Number(subtotal.toFixed(2)));

    const cartTotal: number = cartItems.reduce(
      (ack: number, item: CartItem) => {
        return ack + item.quantity;
      },
      0
    );

    setTotalQuantities(cartTotal);

    if (cartItems.length !== 0) {
      window.localStorage.setItem("3DLICIOUS_CART", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const isInCart = (product: IProduct): boolean => {
    const inCart: boolean = cartItems.some((item) => item.id === product?._id);

    return inCart;
  };

  const addCartItem = (product: IProduct) => {
    const newItem: CartItem = {
      id: product._id,
      product: product,
      quantity: 1,
    };

    setCartItems((cartItems: Array<CartItem>) => {
      const isItemInCart: boolean = isInCart(product);

      if (isItemInCart) {
        // todo: already owned
        if (product.isDigital) return cartItems;
        return cartItems.map((item: CartItem) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + newItem.quantity,
              }
            : item
        );
      }
      // First time the item is added
      return [...cartItems, newItem];
    });

    toast({
      title: "Added To Cart!",
      description: `${newItem.product.name} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  const removeCartItem = (id: ObjectId) => {
    setCartItems((cartItems: Array<CartItem>) =>
      cartItems.reduce((ack: Array<CartItem>, item: CartItem) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        }

        return [...ack, item];
      }, [] as CartItem[])
    );
  };

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
