import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { IProduct } from "../../models";
import { Center, Heading, VStack } from "@chakra-ui/react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<IProduct>();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/api/product/${id}`);

      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <Center
      w="100%"
      pos="absolute"
      top="20vh"
      flexDir="column"
      gap={4}
    >
      <VStack
        w="65%"
        h="70vh"
        align="left"
        // background="white"
        // borderRadius={20}
        // boxShadow="0 4px 8px #2D3748"
      >
        <Heading></Heading>
      </VStack>
    </Center>
  );
};

export default Product;
