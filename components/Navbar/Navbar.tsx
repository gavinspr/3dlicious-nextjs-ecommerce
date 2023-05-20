import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cart from "../Cart";
import {
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { useRouter, NextRouter } from "next/router";
import NavbarItem from "./NavbarItem";

// todo: underline/indicate current page; need to decide color an supporting style
// todo: redirect page if invalid route
// todo: shop menu items need to come from backend endpoint
// todo: have menu items alternate background colors
// todo: make home icon shake on hover
// todo: fix menu

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("");

  const router: NextRouter = useRouter();

  useEffect(() => {
    setCurrentPage(router.pathname.substring(1));
  }, [router.pathname]);

  return (
    <Flex mx="2%" mt="1%" align="center" position="relative">
      <Link href="/">
        <Image
          w={225}
          h={225}
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
      >
        <Menu isOpen={showMenu}>
          <Link href="/store">
            <MenuButton
              p={0}
              as={Button}
              background="transparent"
              onClick={() => setShowMenu(false)}
              onMouseEnter={() => setShowMenu(true)}
              color={currentPage === "store" ? "green" : "black"}
              fontSize={20}
              _expanded={{ background: "none" }}
              _focus={{ outline: "none" }}
              _hover={{
                transform: "scale(1.2)",
                transition: "350ms ease all",
              }}
            >
              SHOP
            </MenuButton>
          </Link>
          <MenuList onMouseLeave={() => setShowMenu(false)}>
            <Link href="/store/meals">
              <MenuItem>
                <Text>Meals</Text>
              </MenuItem>
            </Link>
            <Link href="/store/supplies">
              <MenuItem>
                <Text>Supply Kits</Text>
              </MenuItem>
            </Link>
            <Link href="/store/printers">
              <MenuItem>
                <Text>3Dlicious Printers</Text>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <NavbarItem
          name="about"
          currentPage={currentPage}
          onMouseEnter={() => setShowMenu(false)}
        />
        <NavbarItem
          name="contact"
          currentPage={currentPage}
          onMouseEnter={() => setShowMenu(false)}
        />
        <NavbarItem
          name="manage"
          currentPage={currentPage}
          onMouseEnter={() => setShowMenu(false)}
        />
      </HStack>
      <HStack pos="absolute" top="10%" right="2%" spacing={30}>
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
