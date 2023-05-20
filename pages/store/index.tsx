import React, { useEffect, useState } from "react";
import { Center, Flex, Heading, VStack } from "@chakra-ui/react";
import { IProductCategory } from "../../models/ProductCategory";
import fetchProductCategories from "../../utils/fetchProductCategories";
import { CategoryCarousel } from "../../components";

// todo: add subcategory association to IProductCategory
// todo: server render

const StoreFront = () => {
  const [productCategories, setProductCategories] = useState<
    Array<IProductCategory>
  >([]);

  useEffect(() => {
    fetchProductCategories(setProductCategories, { byIndex: true });
  }, []);

  console.log(productCategories);

  // const handlePost = async () => {
  //   console.log("pp");

  //   const response: Response = await fetch("/api/productCategory", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: "3Dlicious Printers",
  //       slug: "Printers",
  //       image_url: " ",
  //       index: 3,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data, "dd");
  // };

  // const handlePostSC = async () => {
  //   console.log("pp");

  //todo: make slug out of parentData slug

  //   const response: Response = await fetch("/api/subCategory", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: "Dinner",
  //       slug: "dinner",
  //       image_url: " ",
  //       index: 1,
  //       parent_category_id: "64682fb563195b39e1ec5305",
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data, "dd");
  // };

  return (
    <VStack width="100%">
      {/* <button onClick={handlePost}>tt</button> */}
      <Heading fontSize={22} alignSelf="flex-start" ml="2vw">
        Shop All
      </Heading>
      {productCategories.length !== 0 ? (
        productCategories.map((productCategory: IProductCategory) => (
          <CategoryCarousel
            key={`${productCategory._id}`}
            productCategory={productCategory}
          />
        ))
      ) : (
        <div>todo skeleton</div>
      )}
    </VStack>
  );
};

export default StoreFront;
