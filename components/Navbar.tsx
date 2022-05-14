import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <HStack pos="absolute" top={0} left="4%">
        <Image src="/logo_transparent.png" w={200} h={200} aria-label="3Dlicious logo" />
        <Text>SHOP</Text>
        <Text>ABOUT</Text>
        <Text>CONTACT</Text>
      </HStack>
      <HStack pos="absolute" top="3vh" right="4%" spacing={30}>
        <Image
          src="shopping-plate1.png"
          w={50}
          h={50}
          aria-label="Shopping Cart"
        />
        <Image src="account.png" w={50} h={50} aria-label="Account" />
      </HStack>
    </>
  );
};

export default Navbar;
