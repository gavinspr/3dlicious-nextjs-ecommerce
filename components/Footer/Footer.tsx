import React from "react";
import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import { FaTwitter, FaPinterestP, FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import FooterItem from "./FooterItem";
import FooterIconButton from "./FooterIconButton";

const timeTravelFactor: number = 20;

const Footer = () => {
  return (
    <Flex
      flexDir="column"
      borderTop="2px solid"
      borderColor="green.600"
      mt="2%"
      gap={10}
      // mb="2%"
    >
      <HStack mx="2%" mt={2} justify="space-between">
        <HStack gap={8}>
          <FooterItem>Terms Of Service</FooterItem>
          <FooterItem>Shipping</FooterItem>
          <FooterItem>Refund & Returns</FooterItem>
          <FooterItem>Gift Cards</FooterItem>
          <FooterItem>FAQ</FooterItem>
        </HStack>
        <HStack>
          <FooterIconButton icon={<FaTwitter />} label="twitter" />
          <FooterIconButton icon={<FaPinterestP />} label="pinterest" />
          <FooterIconButton icon={<FaFacebookF />} label="facebook" />
          <FooterIconButton icon={<ImInstagram />} label="instagram" />
        </HStack>
      </HStack>
      <Center mx="2%" pb={1}>
        <Text>3Dlicious © {new Date().getFullYear() + timeTravelFactor}</Text>
      </Center>
    </Flex>
  );
};

export default Footer;
