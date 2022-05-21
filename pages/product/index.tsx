import React from "react";
import { Center } from "@chakra-ui/react";
import { PRODUCT_TYPES } from "../../constants";
import { CategoryList } from "../../components";

// todo: rethink this page or use better logic to redirect to storefront

const ProductFront = () => {
  return PRODUCT_TYPES.map((element: any, index: any) => (
    <CategoryList title={element} index={index} storefront={true} />
  ));
};

export default ProductFront;
