import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { IProductCategory } from "../../models/ProductCategory";
import { ISubCategory } from "../../models/SubCategory";
import CarouselItem from "./CarouselItem";

type PropTypes = {
  productCategory: IProductCategory;
};

// todo: fix undefined on title when rerender
// todo: SWR ??
// !! todo: make a array of items from the subcategories and display in carousel

const CategoryCarousel = ({ productCategory }: PropTypes) => {
  const [subCategories, setSubCategories] = useState<ISubCategory[]>();

  const fetchSubCategories = async () => {
    const response: Response = await fetch(
      `/api/subCategory?parentId=${productCategory._id}`
    );

    const data: Array<ISubCategory> = await response.json();

    console.log(data);

    setSubCategories(data);
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <VStack
      w="80%"
      spacing={4}
      align="left"
      // p={storefront ? 2 : 0}
      // background={storefront ? "white" : "none"}
      // boxShadow={storefront ? "0 4px 8px #2D3748" : "none"}
      // borderRadius={storefront ? 20 : 0}
      // borderWidth={storefront ? 2 : 0}
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Link href={`/store/${productCategory.slug}`}>
        <Heading
          fontSize={34}
          cursor="pointer"
          _hover={{ textDecor: "underline" }}
        >
          {productCategory.name}
        </Heading>
      </Link>
      <HStack
        // outline="1px solid red"
        border="1px solid green"
        h="20vh" // temp
        width="100%"
        // spacing={10}
      >
        <p>f</p>
        {subCategories?.map((subCategory: ISubCategory) => (
          <CarouselItem key={`${subCategory._id}`} subCategory={subCategory} />
        ))}
      </HStack>
    </VStack>
  );
};

export default CategoryCarousel;
