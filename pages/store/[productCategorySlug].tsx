import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import { IProduct, IProductCategory } from "../../models";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ProductGrid } from "../../components";

// todo: handle for category with no subs

type PropTypes = {
  productCategory: IProductCategory;
  products: Array<IProduct>;
};

const Store = ({ productCategory, products }: PropTypes) => {
  const [previewData, setPreviewData] = useState<IProduct | undefined>(
    undefined
  );
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

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
      <Modal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setShowPreviewModal(false)}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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

  if (productCategory[0]) {
    const response: Response = await fetch(
      `${process.env.API_V1}/api/product?productCategory=${productCategory[0]._id}&latest=true`
    );
    const data: Array<IProduct> = await response.json();

    products = data;
  } else {
    // Page redirect
    context.res.writeHead(302, { Location: "/redirect-page" });
    context.res.end();
    return { props: {} as PropTypes };
  }

  return {
    props: {
      productCategory: productCategory[0],
      products: products,
    },
  };
};

export default Store;
