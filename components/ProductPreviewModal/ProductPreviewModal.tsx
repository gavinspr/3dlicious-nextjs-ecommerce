import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  Button,
  Image,
  Heading,
  Flex,
  Text,
  Link as LinkC,
} from "@chakra-ui/react";
import { IProduct } from "../../models";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";
import AddToCart from "../AddToCart/AddToCart";
import { useCartContext } from "../../context";

type PropTypes = {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | undefined;
  slug: string;
};

const ProductPreviewModal = ({ isOpen, onClose, product, slug }: PropTypes) => {
  const { addCartItem, isInCart } = useCartContext();

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      {product ? (
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" mt={8} mb={6} gap={5}>
            <Image w={"50%"} h={400} borderRadius={12} src={"/dandan.jpg"} />
            <Flex w="50%" flexDir="column" gap={5}>
              <Heading whiteSpace="nowrap">{product.name}</Heading>
              <Text fontSize={20}>{product.description}</Text>
              <Text fontSize={22}>${product.price}</Text>
              <Flex align="center">
                <AddToCart
                  inCart={isInCart(product)}
                  addToCart={() => addCartItem(product)}
                  alreadyOwned={false} //todo:
                />
                <LinkC as={Link} href={slug}>
                  <Button
                    colorScheme="green"
                    variant="ghost"
                    rightIcon={<ImArrowRight2 />}
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "ease 350ms all",
                    }}
                  >
                    View Product
                  </Button>
                </LinkC>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      ) : (
        <>todo</>
      )}
    </Modal>
  );
};

export default ProductPreviewModal;
