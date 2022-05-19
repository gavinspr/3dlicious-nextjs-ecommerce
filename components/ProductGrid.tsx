import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { IProduct } from "../models";
import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";

type ProductGridProps = {
  title: string;
};

const ProductGrid = ({ title }: ProductGridProps) => {
  const [products, setProducts] = useState<IProduct[]>();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `/api/product?product_type=${title?.toLowerCase()}`
      );

      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [title]);

  return (
    <VStack w="65%" align="left">
      <Heading fontSize={30}>
        {/* //todo: ? title scheme change */}
        All {title![0].toUpperCase() + title!.slice(1).toLowerCase()}:
      </Heading>
      <SimpleGrid
        p={2}
        h="52vh" // todo:
        columns={3}
        spacing={14}
        overflow="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#3182CE",
            borderRadius: "24px",
          },
        }}
      >
        {products?.map((product: IProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ProductGrid;
