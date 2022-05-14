import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type CategoriesItemProps = {
  icon: string;
  title: string;
};

const CategoriesItem = ({ icon, title }: CategoriesItemProps) => {
  return (
    <VStack>
      <Avatar size="lg" src={icon} />
      {/* <Box w="10%"> */}
      {/* <Image
        // w={1000} h={1000}
        src={icon}
      /> */}
      {/* </Box> */}
      <Text>{title}</Text>
    </VStack>
  );
};

// todo: icons get bigger on hover

const Store = () => {
  return (
    <Center
      w="100%"
      pos="absolute"
      top="20vh"
      flexDir="column"
      gap={4}
      // borderWidth={2}
      // borderColor="yellow"
    >
      <VStack
        // borderWidth={2} borderColor="red"
        w="65%"
        align="left"
        spacing={4}
      >
        <Heading
          // borderColor="blue" borderWidth={2}
          // w="100%"
          fontSize={30}
        >
          Categories:
          {/* left off formatting these two divs (categorey and products) */}
        </Heading>
        <HStack
          // w="100%"
          spacing={10}
          // borderColor="purple" borderWidth={2}
        >
          <CategoriesItem title="Meals" icon="/meals2.jpg" />
          <CategoriesItem
            title="Supplies"
            icon="https://image.shutterstock.com/image-photo/collage-various-food-meat-dishes-600w-1749565121.jpg"
          />{" "}
          <CategoriesItem title="Printers" icon="/store_printers1.png" />
        </HStack>
      </VStack>
      <VStack w="65%" align="left">
        <Heading
          fontSize={30}

          // borderColor="blue" borderWidth={2}
          // w="100%"
        >
          {/* //todo: this title will be dynamic */}
          All Products:
          {/* left off formatting these two divs (categorey and products) */}
        </Heading>
        <SimpleGrid
          columns={4}
          spacing={10}
          overflow="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#3182CE",
              borderRadius: "24px",
            },
          }}
          h="52vh"
          // borderWidth={3}
        >
          {[...Array(12)].map((i: any, e: any) => (
            <Box backgroundColor="red" h={250} w={250}>
              <Text>
                {i}
                {e}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};

export default Store;
