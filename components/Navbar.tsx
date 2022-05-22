import React, { useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
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
} from "@chakra-ui/react";

// todo: underline/indicate current page
// todo: redirect page if invalid route

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <HStack pos="absolute" top={0} left="4%">
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
        <HStack h={20} spacing={6} onMouseLeave={() => setShowMenu(false)}>
          <Menu isOpen={showMenu}>
            <Link href="/store">
              <MenuButton
                p={0}
                as={Button}
                fontWeight="normal"
                background="transparent"
                onClick={() => setShowMenu(false)}
                onMouseEnter={() => setShowMenu(true)}
                _focus={{ outline: "none" }}
                _expanded={{ background: "none" }}
                _hover={{ background: "none" }}
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
          <Link href="/about">
            <Text _hover={{ cursor: "pointer" }}>ABOUT</Text>
          </Link>
          <Link href="/contact">
            <Text _hover={{ cursor: "pointer" }}>CONTACT</Text>
          </Link>
          {/* <Link href="/manage">
            <Text
              fontWeight="bold"
              // color="green"
              _hover={{ cursor: "pointer" }}
            >
              MANAGE
            </Text>
          </Link> */}
        </HStack>
      </HStack>

      <HStack pos="absolute" top="3vh" right="4%" spacing={30}>
        <Cart />
        <Link href="/account">
          <Tooltip label="Account">
            <Image src="/account.png" w={50} h={50} aria-label="Account" />
          </Tooltip>
        </Link>
      </HStack>
    </>
  );
};

export default Navbar;
