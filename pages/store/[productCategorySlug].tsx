import React, { useState, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { IProduct, IProductCategory } from "../../models";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ProductGrid, ProductPreviewModal } from "../../components";

// todo: handle for category with no subs

type PropTypes = {
  productCategory: IProductCategory;
  initialProducts: Array<IProduct>;
  totalPages: number;
};

const Store = ({ productCategory, initialProducts, totalPages }: PropTypes) => {
  const [previewData, setPreviewData] = useState<IProduct | undefined>(
    undefined
  );
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<IProduct>>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const page = useRef<number>(1);
  const hasMore = useRef<boolean>(true);

  const handlePreviewModalClose = () => {
    setShowPreviewModal(false);
    setPreviewData(undefined);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasMore.current) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;

      const responsiveDistance = Math.max(1000, 0.2 * window.innerHeight);

      if (distanceToBottom < responsiveDistance) {
        fetchMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchMoreProducts = async () => {
    if (isLoading || !hasMore.current) return;
    setIsLoading(true);

    try {
      page.current++;

      const response: Response = await fetch(
        `/api/product?productCategory=${productCategory._id}&latest=true&page=${page.current}`
      );
      const data = await response.json();
      const newProducts = data.products;

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);

      if (page.current >= totalPages) hasMore.current = false;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Flex width="100%">
        <Flex
          // position="sticky"
          // top={0}
          // left={0}
          background="yellow"
          width="25%"
          // minHeight="10vh"
          flexDirection="column"
          alignItems="center"
        >
          <p>ff</p>
        </Flex>
        <ProductGrid
          products={products}
          setPreviewData={setPreviewData}
          setShowPreviewModal={setShowPreviewModal}
        />
      </Flex>
      <ProductPreviewModal
        isOpen={showPreviewModal}
        onClose={handlePreviewModalClose}
        product={previewData}
        slug={`/store/${productCategory.slug}/${previewData?.slug}`}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PropTypes> = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PropTypes>> => {
  const { productCategorySlug } = context.query;

  const response: Response = await fetch(
    `${process.env.API_V1}/api/productCategory?slug=${productCategorySlug}`
  );
  const productCategory: Array<IProductCategory> = await response.json();

  let products: Array<IProduct> = [];
  let totalPages: number;

  if (productCategory[0]) {
    const response: Response = await fetch(
      `${process.env.API_V1}/api/product?productCategory=${productCategory[0]._id}&latest=true`
    );
    const data: any = await response.json();

    products = data.products;
    totalPages = data.totalPages;
  } else {
    // Page redirect
    context.res.writeHead(302, { Location: "/redirect-page" });
    context.res.end();
    return { props: {} as PropTypes };
  }

  return {
    props: {
      productCategory: productCategory[0],
      initialProducts: products,
      totalPages: totalPages,
    },
  };
};

export default Store;
