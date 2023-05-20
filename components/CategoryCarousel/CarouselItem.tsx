import { Avatar, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ISubCategory } from "../../models/SubCategory";

type PropTypes = {
  subCategory: ISubCategory;
};

const CarouselItem = ({ subCategory }: PropTypes) => {
  const router = useRouter();
  const { id } = router.query;

  // todo: icons get bigger on mouse enter

  return (
    <Link href={`/store/${subCategory.slug}`}>
      <VStack>
        <Avatar src={subCategory.image_url} cursor="pointer" />
      </VStack>
    </Link>
  );
};

export default CarouselItem;
