import React from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";

// todo: item counter

const Cart = () => {
  return (
    <Box pos="absolute" top="2%" right="5%">
      <Image src="shopping-plate.png" width="75%" aria-label="BlockSign logo" />
    </Box>
  );
};

export default Cart;
