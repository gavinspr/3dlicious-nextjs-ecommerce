import React from "react";
import { Center } from "@chakra-ui/react";
import { PRODUCT_TYPES } from "../../constants";
import { CategoryList } from "../../components";

const StoreFront = () => {
  // <Center gap={4} w="100%" top="22vh" pos="absolute" flexDir="column">
  return PRODUCT_TYPES.map((element: any, index: any) => (
    <CategoryList key={index} title={element} index={index} storefront={true} />
  ));
  // </Center>
};

export default StoreFront;
