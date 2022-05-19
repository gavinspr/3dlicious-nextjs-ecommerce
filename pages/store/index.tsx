import React from "react";
import { Center } from "@chakra-ui/react";
import { PRODUCT_TYPES } from "../../constants/ProductType";
import { CategoryList } from "../../components";

const StoreFront = () => {
  return (
    <Center gap={4} w="100%" top="22vh" pos="absolute" flexDir="column">
      {PRODUCT_TYPES.map((element: any, index: any) => (
        <CategoryList
          key={index}
          title={element}
          index={index}
          storefront={true}
        />
      ))}
    </Center>
  );
};

export default StoreFront;
