import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, HStack, Image, Tag, Text, Divider } from "@chakra-ui/react";
import { IProductCategory } from "../../models";
import { CartItem } from "../../@types";

type PropTypes = {
  itemDetails: CartItem;
  isLast: boolean;
};

const CartItemPreview = ({ itemDetails, isLast }: PropTypes) => {
  const [subCategorySlug, setSubCategorySlug] = useState<string>("");

  useEffect(() => {
    fetchSlug();
  }, []);

  const fetchSlug = async () => {
    const response: Response = await fetch(
      `/api/productCategory/${itemDetails.product.product_category}`
    );

    const data: IProductCategory = await response.json();

    setSubCategorySlug(data.slug);
  };

  return (
    <>
      <HStack pb={2} pt={2} spacing={6}>
        {subCategorySlug && (
          <>
            <Link
              href={`/store/${subCategorySlug}/${itemDetails.product.slug}`}
            >
              <Box w="25%" cursor="pointer">
                <Image
                  src={
                    itemDetails.product.image_url
                      ? itemDetails.product.image_url
                      : "/dandan.jpg"
                  }
                  boxSize={24}
                />
              </Box>
            </Link>
            <Text w="45%">{itemDetails.product.name}</Text>
            <Text w="15%">{itemDetails.quantity}</Text>
            <Text w="15%">
              ${itemDetails.quantity * itemDetails.product.price}
            </Text>
          </>
        )}
      </HStack>
      {!isLast && <Divider />}
    </>
  );
};

export default CartItemPreview;
