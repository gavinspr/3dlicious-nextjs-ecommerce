import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { IProductCategory } from "../../models/ProductCategory";
import { CategoryCarousel } from "../../components";
import { GetServerSideProps } from "next";

// todo: add subcategory association to IProductCategory
// todo: ? instead of the catCar and showing products maybe just list out sub categories

type PropTypes = {
  productCategories: Array<IProductCategory>;
};

const StoreFront = ({ productCategories }: PropTypes) => {
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
  // const handlePost = async () => {
  //   const response: Response = await fetch("/api/product", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: "York Meat",
  //       slug: "york-meat",
  //       product_category: "646a37ee19e275f93a18345e", // meals
  //       sub_categories: ["646a642290dc41c1d7231862"], // healthy
  //       image_url: null,
  //       price: 10.42,
  //       rating: 3.2,
  //       review_count: 14,
  //       stock_count: null,
  //       servings: 2,
  //       description: "yeet",
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
      {productCategories?.length !== 0 ? (
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

export const getServerSideProps: GetServerSideProps<PropTypes> = async () => {
  const response: Response = await fetch(
    `${process.env.API_V1}/api/productCategory?byIndex=true`
  );
  const data: Array<IProductCategory> = await response.json();

  return {
    props: { productCategories: data },
  };
};

export default StoreFront;
