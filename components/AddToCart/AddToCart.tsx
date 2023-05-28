import React, { MouseEventHandler } from "react";
import { Button } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

type PropTypes = {
  inCart: boolean;
  addToCart: MouseEventHandler<HTMLButtonElement>;
  alreadyOwned: boolean; // todo:
};

const AddToCart = ({ addToCart, inCart }: PropTypes) => {
  return (
    <Button
      mt={5}
      w="60%"
      size="lg"
      iconSpacing={6}
      colorScheme="green"
      borderWidth={2}
      rightIcon={<TiShoppingCart size={25} />}
      variant={inCart ? "outline" : "solid"}
      onClick={addToCart}
    >
      {inCart ? "Item In Cart" : "Add To Cart"}
    </Button>
  );
};

export default AddToCart;
