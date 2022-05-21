import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Center } from "@chakra-ui/react";
import { CategoryList, ProductGrid } from "../../components";

// todo: icons get bigger on hover
// todo: make page sticky and stop on products header

const Store = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    id && (
      <>
        <CategoryList
          title={id.at(-1) as string}
          index={0}
          storefront={false}
        />
        <ProductGrid title={id.at(-1) as string} />
      </>
    )
  );
};

export default Store;
