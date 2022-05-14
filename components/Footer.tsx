import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center pos="absolute" top="97vh" w="100%">
      <Text fontSize={14}>3Dlicious © {new Date().getFullYear()}</Text>
    </Center>
  );
};

export default Footer;
