import React from "react";
import { Text } from "@chakra-ui/react";

type PropTypes = {
  children: string;
};

const FooterItem = ({ children }: PropTypes) => {
  return (
    <Text
      cursor="pointer"
      _hover={{
        transform: "scale(1.1)",
        transition: "350ms ease all",
      }}
    >
      {children}
    </Text>
  );
};

export default FooterItem;
