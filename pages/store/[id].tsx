import React from "react";
import { useRouter } from "next/router";
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
import mockDB from "../../db";
import { CategoryList } from "../../components";

type CategoriesItemProps = {
  icon: string;
  title: string;
};

const CategoriesItem = ({ icon, title }: CategoriesItemProps) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, "ggg");
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
  const router = useRouter();
  const { id } = router.query;
  console.log(id, "d");

  const title: string = String(id!);

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
      {<CategoryList title={title} index={0} storefront={false} />}

      <VStack w="65%" align="left">
        <Heading
          fontSize={30}

          // borderColor="blue" borderWidth={2}
          // w="100%"
        >
          {/* //todo: this title will be dynamic */}
          All {title![0].toUpperCase() + title!.slice(1).toLowerCase()}:
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
