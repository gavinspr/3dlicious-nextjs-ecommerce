import React from "react";
import { Center } from "@chakra-ui/react";
import { PRODUCT_TYPES } from "../../constants/ProductType";
import { CategoryList } from "../../components";

// todo: rethink this page or use better logic to redirect to storefront

const ProductFront = () => {
  return (
    <Center gap={4} w="100%" top="22vh" pos="absolute" flexDir="column">
      {PRODUCT_TYPES.map((element: any, index: any) => (
        <CategoryList title={element} index={index} storefront={true} />
      ))}
    </Center>
  );
};

export default ProductFront;
