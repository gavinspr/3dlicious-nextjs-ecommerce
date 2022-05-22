import React from "react";
import Link from "next/link";
import { CartItem, useCartContext } from "../context";
import {
  Box,
  Button,
  HStack,
  Image,
  Tag,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

type CartItemPreviewProps = {
  itemDetails: CartItem;
  isLast: boolean;
};

const CartItemPreview = ({ itemDetails, isLast }: CartItemPreviewProps) => {
  return (
    <>
      <HStack pb={2} pt={2} spacing={6}>
        <Link href={`/product/${itemDetails.product.slug}`}>
          <Box w="25%" _hover={{ cursor: "pointer" }}>
            <Image src={itemDetails.product.image} boxSize={14} />
          </Box>
        </Link>
        <Text fontSize={14} w="45%">
          {itemDetails.product.name}
        </Text>
        <Text w="15%">{itemDetails.quantity}</Text>
        <Text w="15%">{itemDetails.totalPrice}</Text>
      </HStack>
      {!isLast && <Divider />}
    </>
  );
};

const Cart = () => {
  const { cartItems, totalPrice, totalQuantities } = useCartContext();

  return (
    <Popover trigger="hover" preventOverflow={false} returnFocusOnClose={false}>
      <PopoverContent>
        <PopoverHeader mb={2} textAlign="center" fontWeight="bold">
          Shopping Cart
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          <HStack pb={2} spacing={6}>
            <Text fontWeight="bold" color="gray.500" w="70%">
              Item
            </Text>
            <Text fontWeight="bold" color="gray.500" w="15%">
              QTY
            </Text>
            <Text fontWeight="bold" color="gray.500" w="15%">
              Price
            </Text>
          </HStack>
          <Divider />
          {cartItems.map((item: CartItem, index: number) => (
            <CartItemPreview
              key={index}
              itemDetails={item}
              isLast={index === cartItems.length - 1 ? true : false}
            />
          ))}
        </PopoverBody>
        <PopoverFooter>
          <HStack>
            <ButtonGroup
              w="70%"
              size="xs"
              spacing={6}
              colorScheme="green"
              justifyContent="center"
            >
              <Link href="/cart">
                <Button variant="outline">View Cart</Button>
              </Link>
              <Button>Checkout</Button>
            </ButtonGroup>
            <Text w="30%" fontSize={14} textAlign="center">
              <strong>Subtotal:</strong> ${totalPrice}
            </Text>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
      <Link href="/cart">
        <Box pos="relative">
          <Tag
            pos="absolute"
            top={0}
            right={-2}
            size="sm"
            color="white"
            borderRadius="full"
            background="green.500"
          >
            {totalQuantities}
          </Tag>
          <PopoverTrigger>
            <Image
              w={50}
              h={50}
              src="/shopping-plate1.png"
              aria-label="Shopping Cart"
              _hover={{ cursor: "pointer" }}
            />
          </PopoverTrigger>
        </Box>
      </Link>
    </Popover>
  );
};

export default Cart;
