import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { IProductCategory } from "../../models";

type PropTypes = {
  name: string;
  label?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentPage: boolean;
  subCategories: Array<any>;
};

const NavbarMenu = ({
  name,
  label,
  isOpen,
  setIsOpen,
  currentPage,
  subCategories,
}: PropTypes) => {
  return (
    <Menu isOpen={isOpen}>
      <Link href={`/${name}`}>
        <MenuButton
          mt={0.5}
          p={0}
          as={Button}
          background="transparent"
          onClick={() => setIsOpen(false)}
          onMouseEnter={() => setIsOpen(true)}
          color={currentPage ? "green" : "black"}
          fontSize={24}
          _expanded={{ background: "none" }}
          _focus={{ outline: "none" }}
          _hover={{
            textDecor: "underline",
          }}
        >
          {label ? label.toUpperCase() : name.toUpperCase()}
        </MenuButton>
      </Link>
      <MenuList
        onMouseLeave={() => setIsOpen(false)}
        _hover={{
          transform: "scale(1.2)",
          transition: "350ms ease all",
        }}
      >
        {subCategories.length !== 0 ? (
          subCategories.map((category: IProductCategory) => (
            <Link key={`${category._id}`} href={`/${name}/${category.slug}`}>
              <MenuItem>
                <Text>{category.name}</Text>
              </MenuItem>
            </Link>
          ))
        ) : (
          <Flex justify="center" height="10vh">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              alignSelf="center"
            />
          </Flex>
        )}
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
