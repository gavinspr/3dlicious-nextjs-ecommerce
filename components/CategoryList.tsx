import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { PRODUCT_TYPES } from "../constants/";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ICategory } from "../models";
import { Avatar, Heading, HStack, Text, VStack } from "@chakra-ui/react";

type CategoriesItemProps = {
  icon: string;
  title: string;
  storefront: boolean;
  parentCategory: string;
};

const CategoriesItem = ({
  icon,
  title,
  storefront,
  parentCategory,
}: CategoriesItemProps) => {
  const router = useRouter();
  const { id } = router.query;

  // todo: icons get bigger on mouse enter

  return (
    <Link href={`/store/${parentCategory}/${title.toLowerCase()}`}>
      <VStack>
        <Avatar
          src={icon}
          size={storefront ? "xl" : "lg"}
          _hover={{ cursor: "pointer" }}
        />
        <Text>{title}</Text>
      </VStack>
    </Link>
  );
};

type CategoryListProps = {
  title: string | undefined;
  index: any;
  storefront: boolean;
};

// todo: fix undefined on title when rerender
// todo: SWR

const CategoryList = ({ title, index, storefront }: CategoryListProps) => {
  const [subCategories, setSubCategories] = useState<ICategory[]>();

  const fetchSubCategories = async () => {
    try {
      const res = await axios.get(`/api/category?product_type=${title}`);
      console.log(res.data);

      setSubCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, [title]);

  return (
    <VStack
      w="65%"
      spacing={4}
      align="left"
      p={storefront ? 2 : 0}
      background={storefront ? "white" : "none"}
      boxShadow={storefront ? "0 4px 8px #2D3748" : "none"}
      borderRadius={storefront ? 20 : 0}
      borderWidth={storefront ? 2 : 0}
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Link href={`/store/${title}`}>
        <Heading fontSize={storefront ? 36 : 30} _hover={{ cursor: "pointer" }}>
          {title![0].toUpperCase() + title!.slice(1).toLowerCase()}:
        </Heading>
      </Link>
      <HStack spacing={10}>
        {subCategories?.map((category: any, index: any) => (
          <CategoriesItem
            key={index}
            title={category.name}
            icon="/store_printers1.png" // temp; todo: IPFS
            storefront={storefront}
            parentCategory={title!}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default CategoryList;
