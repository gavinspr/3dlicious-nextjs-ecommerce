import React from "react";
import Link from "next/link";
import { CartItem, useCartContext } from "../../context";
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
import CartItemPreview from "./CartItemPreview";

const Cart = () => {
  const { cartItems, totalPrice, totalQuantities } = useCartContext();

  return (
    <Popover
      trigger="hover"
      preventOverflow={false}
      placement="end-end"
      returnFocusOnClose={false}
    >
      <Link href="/cart">
        <Box pos="relative">
          <Tag
            pos="absolute"
            top={0}
            right={-1}
            color="white"
            borderRadius="full"
            background="green.500"
          >
            {totalQuantities}
          </Tag>
          <PopoverTrigger>
            <Image
              w={65}
              h={65}
              src="/shopping-plate1.png"
              aria-label="Shopping Cart"
              _hover={{ cursor: "pointer" }}
            />
          </PopoverTrigger>
        </Box>
      </Link>
      <PopoverContent width={500}>
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
            <ButtonGroup w="70%" size="sm" spacing={12} colorScheme="green">
              <Link href="/cart">
                <Button variant="outline">View Cart</Button>
              </Link>
              <Button>Checkout</Button>
            </ButtonGroup>
            <Text w="30%" textAlign="center">
              <strong>Subtotal:</strong> ${totalPrice}
            </Text>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
