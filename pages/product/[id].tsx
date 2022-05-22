import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { IProduct } from "../../models";
import { SupplyItem } from "../../components";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import { IoIosPeople, IoMdStopwatch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useCartContext } from "../../context";

const Product = () => {
  const [product, setProduct] = useState<IProduct>();
  const [inCart, setInCart] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  const { addCartItem, isInCart } = useCartContext();

  const handleAddToCart = () => {
    addCartItem(product!);
    if (!inCart) setInCart(true);
  };

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/api/product/${id}`);

      setProduct(res.data);
    } catch (err) {
      // todo:
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const isItemInCart: boolean = isInCart(product!);
    setInCart(isItemInCart);
  }, [product]);

  return (
    product && (
      <VStack w="65%" h="70vh" pos="relative">
        <Tooltip label="Back" placement="right" hasArrow>
          <IconButton
            top={4}
            left={0}
            pos="absolute"
            fontSize={30}
            background="none"
            aria-label="Page Back"
            icon={<IoReturnDownBackOutline />}
            onClick={() => router.back()}
            _hover={{ background: "none" }}
          />
        </Tooltip>
        <HStack spacing={30} pos="absolute" top={16} w="50%" left={4}>
          <Heading fontSize={28}>{product.name}</Heading>
          <Text>—</Text>
          <Text fontSize={18}>${product.price}</Text>
        </HStack>
        <Container pos="absolute" top={36} fontSize={20} left={0}>
          {product.description}
        </Container>
        <VStack pos="absolute" right={0} h="100%" w="50%" top={16}>
          <Image w="50%" h="50%" borderRadius={12} src={product.image} />
          <HStack w="50%" spacing={16}>
            <HStack
              // todo: onclick go to reviews
              spacing={1}
              _hover={{ cursor: "pointer" }}
              w="50%"
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
              <HStack
                w="50%"
                pr={1}
                justify="end"
                _hover={{ cursor: "pointer" }}
              >
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
          <HStack w="50%" h="8%" pt={4}>
            <Tooltip label="Required Supplied">
              <Heading fontSize={16}>Supplies:</Heading>
            </Tooltip>
            {
              // todo: horizontal scroll if overflow
              product.required_supplies?.map((supply: any, index: any) => (
                <SupplyItem key={index} type={supply} />
              ))
            }
          </HStack>
          <Box w="50%">
            <Button
              mt={10}
              w="100%"
              size="lg"
              iconSpacing={6}
              colorScheme="green"
              borderWidth={2}
              rightIcon={<TiShoppingCart size={25} />}
              variant={inCart ? "outline" : "solid"}
              onClick={handleAddToCart}
            >
              {inCart ? "Item In Cart" : "Add To Cart"}
            </Button>
          </Box>
        </VStack>
        {/* //todo: recommended items scroll */}
      </VStack>
    )
  );
};

export default Product;
