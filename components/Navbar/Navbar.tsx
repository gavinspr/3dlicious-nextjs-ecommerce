import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { HStack, Image, Tooltip, Flex } from "@chakra-ui/react";
import { useRouter, NextRouter } from "next/router";
import NavbarItem from "./NavbarItem";
import { IProductCategory } from "../../models/ProductCategory";
import fetchProductCategories from "../../utils/fetchProductCategories";
import NavbarMenu from "./NavbarMenu";

// todo: have menu items alternate background colors
// todo: fix menu popover shift; make from scratch

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [productCategories, setProductCategories] = useState<
    Array<IProductCategory>
  >([]);

  const router: NextRouter = useRouter();

  useEffect(() => {
    fetchProductCategories(setProductCategories, { byIndex: true });
  }, []);

  return (
    <Flex
      px="2%"
      align="center"
      position="relative"
      borderBottom="20px solid"
      borderColor={"green.600"}
    >
      <Link href="/">
        <Image
          w={200}
          h={200}
          mr={5}
          src="/logo.svg"
          aria-label="3Dlicious logo"
          _hover={{ cursor: "pointer" }}
        />
      </Link>
      <HStack
        h={20}
        spacing={6}
        onMouseLeave={() => setShowMenu(false)}
        fontSize={20}
        fontWeight="bold"
        align="center"
      >
        <NavbarMenu
          name="store"
          label="shop"
          isOpen={showMenu}
          setIsOpen={setShowMenu}
          currentPage={router.pathname.includes("store")}
          subCategories={productCategories}
        />
        <NavbarItem
          name="about"
          currentPage={router.pathname.includes("about")}
          onMouseEnter={() => setShowMenu(false)}
        />
        <NavbarItem
          name="contact"
          currentPage={router.pathname.includes("contact")}
          onMouseEnter={() => setShowMenu(false)}
        />
        <NavbarItem
          name="manage"
          currentPage={router.pathname.includes("manage")}
          onMouseEnter={() => setShowMenu(false)}
        />
      </HStack>
      <HStack pos="absolute" top="12%" right="4%" spacing={30}>
        <Cart />
        <Link href="/account">
          <Tooltip label="Account">
            <Image src="/account.png" w={65} h={65} aria-label="Account" />
          </Tooltip>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
