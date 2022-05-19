import React from "react";
import { useRouter } from "next/router";
import { Center } from "@chakra-ui/react";
import { CategoryList, ProductGrid } from "../../components";

// todo: icons get bigger on hover
// todo: make page sticky and stop on products header

const Store = () => {
  const router = useRouter();
  const { id } = router.query;

  const title: string = id!.at(-1) as string;

  return (
    <Center w="100%" gap={4} flexDir="column" pos="absolute" top="20vh">
      <CategoryList title={title} index={0} storefront={false} />
      <ProductGrid title={title} />
    </Center>
  );
};

export default Store;
