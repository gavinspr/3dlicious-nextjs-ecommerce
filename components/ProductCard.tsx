import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IProduct } from "../models/Product";
import { MdStar } from "react-icons/md";
import { IoIosPeople, IoMdStopwatch } from "react-icons/io";
import { BsBagPlusFill, BsBagCheck } from "react-icons/bs";
import { GiPaperBagOpen } from "react-icons/gi";
import { Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { CartItem, useCartContext } from "../context";

type ProductCardProps = {
  product: IProduct;
};

// todo: add multiple qty on product page

const ProductCard = ({ product }: ProductCardProps) => {
  const [inCart, setInCart] = useState<boolean>(false);

  const descriptionPreviewCount: number = 50;

  const { addCartItem, isInCart } = useCartContext();

  const handleAddToCart = () => {
    addCartItem(product);
    if (!inCart) setInCart(true);
  };

  useEffect(() => {
    const isItemInCart: boolean = isInCart(product!);
    setInCart(isItemInCart);
  }, []);

  return (
    <VStack
      h="60%"
      borderWidth={2}
      borderRadius={20}
      backgroundColor="white"
      boxShadow={"0 1px 4px #2D3748"}
    >
      <HStack
        pt={2}
        w="100%"
        // todo: fix
      >
        <Heading pl={4} w="75%" size="md">
          {product.name}
        </Heading>
        <Heading w="25%" size="sm">{`$${product.price}`}</Heading>
      </HStack>
      <Link href={`/product/${product.slug}`}>
        <Image
          w="90%"
          h="60%"
          borderRadius={12}
          src={product.image}
          _hover={{ cursor: "pointer" }}
        />
      </Link>
      <VStack w="100%">
        <HStack
          w="90%"
          spacing={16}
          //  todo: fix spacing
        >
          <HStack
            // todo: onclick go to reviews
            spacing={1}
            _hover={{ cursor: "pointer" }}
          >
            <HStack spacing={1} pl={1}>
              <Text fontSize={14}>
                {product.rating === 0 ? "0.0" : product.rating}
              </Text>
              <Icon as={MdStar} color="gold" />
            </HStack>
            <Text fontSize={12} color={"blue.400"}>
              {product.review_count} reviews
            </Text>
          </HStack>

          {product.cook_time && (
            <HStack pr={1} justify="end" _hover={{ cursor: "pointer" }}>
              <HStack spacing={0}>
                <Text fontSize={15}>{product.cook_time}</Text>
                <Icon as={IoMdStopwatch} w="60%" h={4} color="gray" />
              </HStack>
              <HStack spacing={1}>
                <Text fontSize={14}>{product.servings}</Text>
                <Icon as={IoIosPeople} w="70%" h={5} color="blue.500" />
              </HStack>
            </HStack>
          )}
        </HStack>
        <HStack>
          <Link href={`/product/${product.slug}`}>
            <Text
              // todo: text grow-shrink effect
              pl={4}
              w="75%"
              fontSize={14}
              _hover={{ cursor: "pointer" }}
            >
              {product.description.slice(0, descriptionPreviewCount)}...
            </Text>
          </Link>
          <Icon
            as={inCart ? BsBagCheck : BsBagPlusFill}
            w="20%"
            h="50%"
            color="green"
            onClick={handleAddToCart}
            _hover={{ cursor: "pointer" }}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
