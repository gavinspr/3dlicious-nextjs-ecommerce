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
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Link from "next/link";
import mockDB from "../db";
// import { PRODUCT_TYPES } from "../../constants/ProductType";
import axios from "axios";

type CategoryListProps = {
  title: string | undefined;
  index: any;
  storefront: boolean;
};

// todo: fix undefined on title when rerender

const CategoryList = ({ title, index, storefront }: CategoryListProps) => {
  const [subCategories, setSubCategories] = useState<any[]>();

  const fetchSubCategories = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/category?product_type=${title?.toLocaleLowerCase()}`
      );
      console.log(res.data);

      setSubCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(title, "tt");
    fetchSubCategories();
  }, [title]);

  return (
    <VStack
      // borderWidth={2} borderColor="red"
      w="65%"
      align="left"
      spacing={4}
      background={storefront ? "white" : "none"}
      p={storefront ? 2 : 0}
      borderRadius={storefront ? 20 : 0}
      overflow="auto"
      boxShadow={storefront ? "0 4px 8px #2D3748" : "none"}
      borderWidth={storefront ? 2 : 0}
      css={{
        "&::-webkit-scrollbar": {
          width: "1px",
          // width: "0",
          // visibility: "hidden",
          display: "none",
        },
        "&::-webkit-scrollbar-track": {
          width: "1px",
          // width: "0",
          // visibility: "hidden",
          display: "none",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#3182CE",
          borderRadius: "24px",
        },
      }}
    >
      <Link href={`/store/${title?.toLowerCase()}`}>
        <Heading
          // todo: make nav click
          fontSize={storefront ? 36 : 30}
        >
          {title![0].toUpperCase() + title!.slice(1).toLowerCase()}:
          {/* left off formatting these two divs (categorey and products) */}
        </Heading>
      </Link>
      <HStack
        // w="100%"
        spacing={10}
        // borderColor="purple" borderWidth={2}
      >
        {subCategories &&
          subCategories.map((e: any, i: any) => (
            <CategoriesItem
              itemId={i}
              title={e.name}
              icon="/store_printers1.png"
              storefront={storefront}
            />
          ))}
      </HStack>
    </VStack>
  );
};

type CategoriesItemProps = {
  icon: string;
  title: string;
  itemId: string;
  storefront: boolean;
};

const CategoriesItem = ({
  icon,
  title,
  itemId,
  storefront,
}: CategoriesItemProps) => {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id,"ggg")
  // todo: link needs sub-cat ; i.e. meals
  // todo: icons get bigger on hover
  return (
    <Link href={`/store/${title}`}>
      <VStack>
        <Avatar size={storefront ? "xl" : "lg"} src={icon} />
        {/* <Box w="10%"> */}
        {/* <Image
        // w={1000} h={1000}
        src={icon}
      /> */}
        {/* </Box> */}
        <Text>{title}</Text>
      </VStack>
    </Link>
  );
};

export default CategoryList;
