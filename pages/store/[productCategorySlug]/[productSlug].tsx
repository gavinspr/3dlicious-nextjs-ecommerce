import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IProduct } from "../../../models";
import {
  AddToCart,
  Rating,
  SupplyItem,
  TimeAndServing,
} from "../../../components";
import { TiShoppingCart } from "react-icons/ti";
import { Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useCartContext } from "../../../context";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

// todo: Nutritional facts accordion
// todo: Supplies required accordion
// todo: recommended items
// todo: change cart to ~"Already Owned" if users owns digital item
// todo: item in cart for digital items;; clicking again removes from cart

type PropTypes = {
  product: IProduct;
};

const Product = ({ product }: PropTypes) => {
  const [inCart, setInCart] = useState<boolean | undefined>(undefined);

  const router = useRouter();

  const { addCartItem, isInCart, cartItems } = useCartContext();

  useEffect(() => {
    const isItemInCart: boolean = isInCart(product);
    setInCart(isItemInCart);
  }, [cartItems]);

  return (
    <Flex flexDir="column" w="85%">
      <Link href={`/store/${router.query.productCategorySlug}`}>
        <Flex
          align="center"
          w="fit-content"
          mb={5}
          ml={-20}
          cursor="pointer"
          _hover={{ transform: "scale(1.2)", transition: "ease 350ms all" }}
        >
          <FiChevronLeft size={36} />
          <Text>Back</Text>
        </Flex>
      </Link>
      <Flex justify="space-between">
        <Flex w="50%">
          <Image w={"100%"} h={700} borderRadius={12} src={"/dandan.jpg"} />
        </Flex>
        <Flex w="40%" align="left" flexDir="column">
          <Heading mt={10}>{product.name}</Heading>
          <Flex gap={5} width="100%">
            <Rating // todo: fix fractional
              rating={3.5}
              reviewCount={product.review_count}
            />
            {product.cook_time && product.servings && (
              <TimeAndServing
                cookTime={product.cook_time}
                servings={product.servings}
              />
            )}
          </Flex>
          <Text mt="15%" fontSize={20}>
            {product.description}
          </Text>
          <Text fontSize={24} fontWeight="bold" mt={10}>
            ${product.price}
          </Text>
          {inCart !== undefined && (
            <AddToCart
              inCart={inCart}
              addToCart={() => addCartItem(product)}
              alreadyOwned={false} //todo:
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps<PropTypes> = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PropTypes>> => {
  const { productSlug } = context.query;

  const response: Response = await fetch(
    `${process.env.API_V1}/api/product/${productSlug}`
  );
  const product: IProduct = await response.json();

  if (product) {
    // todo: ?
  } else {
    // Page redirect
    context.res.writeHead(302, { Location: "/redirect-page" });
    context.res.end();
    return { props: {} as PropTypes };
  }

  return {
    props: {
      product: product,
    },
  };
};

export default Product;
