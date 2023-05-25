import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { IProduct } from "../../models/Product";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  transition,
  VStack,
} from "@chakra-ui/react";
import Rating from "./Rating";
import TimeAndServing from "./TimeAndServing";

type ProductCardProps = {
  product: IProduct;
  setPreviewData: Dispatch<SetStateAction<IProduct | undefined>>;
  setShowPreviewModal: Dispatch<SetStateAction<boolean>>;
};

const ProductCard = ({
  product,
  setPreviewData,
  setShowPreviewModal,
}: ProductCardProps) => {
  const [showPreviewButton, setShowPreviewButton] = useState<boolean>(false);

  const handleShowPreview = () => {
    setPreviewData(product);
    setShowPreviewModal(true);
  };

  return (
    <Link href={`/store/meals/${product.slug}`}>
      <VStack
        h="40vh"
        w="25%"
        minW="25%"
        // border="1px solid red"
        cursor="pointer"
        p={2}
        mb={8}
        _hover={{ transform: "scale(1.04)", transition: "ease 350ms all" }}
      >
        <Box
          overflow="hidden"
          minWidth="100%"
          width="100%"
          pos="relative"
          _hover={{ textDecor: "underline" }}
          onMouseEnter={() => setShowPreviewButton(true)}
          onMouseLeave={() => setShowPreviewButton(false)}
        >
          <Image
            src={"/dandan.jpg"}
            alt={product.name}
            height="300px"
            w="100%"
          />
          {showPreviewButton && (
            <Button
              pos="absolute"
              bottom="10"
              outline="1px solid red"
              w={20}
              left="0"
              right="0"
              margin="0 auto"
              // _hover={{ transform: "scale(1.05)" }}
              onClick={(e) => {
                e.stopPropagation();
                handleShowPreview();
              }}
            >
              Preview
            </Button>
          )}
        </Box>
        <Heading
          w="100%"
          // outline="1px solid red"
          alignSelf="flex-start"
          fontSize={20}
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {product.name}
        </Heading>

        <Flex
          w="100%"
          // outline="1px solid blue"
        >
          <Rating rating={product.rating} review_count={product.review_count} />
          {product.cook_time && product.servings && (
            <TimeAndServing
              cook_time={product.cook_time}
              servings={product.servings}
            />
          )}
        </Flex>
      </VStack>
    </Link>
  );
};

export default ProductCard;
