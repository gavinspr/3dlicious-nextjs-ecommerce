import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { IProduct } from "../../models/Product";
import { Box, Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import Rating from "../Rating/Rating";
import TimeAndServing from "../TimeAndServing/TimeAndServing";

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
              w={20}
              left="0"
              right="0"
              margin="0 auto"
              colorScheme="blue"
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
          alignSelf="flex-start"
          fontSize={20}
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {product.name}
        </Heading>
        <Flex w="100%" justifyContent="space-between">
          <Rating rating={product.rating} reviewCount={product.review_count} />
          {product.cook_time && product.servings && (
            <TimeAndServing
              cookTime={product.cook_time}
              servings={product.servings}
            />
          )}
        </Flex>
      </VStack>
    </Link>
  );
};

export default ProductCard;
