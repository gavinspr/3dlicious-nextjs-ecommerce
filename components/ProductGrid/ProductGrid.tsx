import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "../../models";
import { VStack, Flex } from "@chakra-ui/react";

type ProductGridProps = {
  products: any;
  setPreviewData: any;
  setShowPreviewModal: any;
};

const ProductGrid = ({
  products,
  setPreviewData,
  setShowPreviewModal,
}: ProductGridProps) => {
  return (
    <VStack w="100%" align="left">
      <Flex pl={4} overflow="auto" flexWrap="wrap">
        {products?.map((product: IProduct, index: number) => (
          <ProductCard
            key={`${product._id}`}
            product={product}
            setPreviewData={setPreviewData}
            setShowPreviewModal={setShowPreviewModal}
          />
        ))}
      </Flex>
    </VStack>
  );
};

export default ProductGrid;
