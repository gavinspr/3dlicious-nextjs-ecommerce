import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
// todo: underline current page

// type NavItemMenuProps = {
//   item: string;
// };

// const NavItemMenu = ({ item }: NavItemMenuProps) => {
//   const [showMenu, setShowMenu] = useState<boolean>(false);
//   return (
//     <Menu isOpen={showMenu}>
//       <Link href="/store">
//         <MenuButton
//           as={Button}
//           fontWeight="normal"
//           background="transparent"
//           rightIcon={<BsChevronDown />}
//           onClick={() => setShowMenu(false)}
//           onMouseEnter={() => setShowMenu(true)}
//           _focus={{ outline: "none" }}
//           _expanded={{ background: "none" }}
//           _hover={{ background: "none" }}
//         >
//           {item.toLocaleUpperCase()}
//         </MenuButton>
//       </Link>
//       {/* <MenuList backgroundColor="transparent">
//         <MenuItem>
//           <Link href="/store/meals">Meals</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link href="store/supply">Supply Kits</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link href="store/printers">3Dlicious Printers</Link>
//         </MenuItem>
//       </MenuList> */}
//     </Menu>
//   );
// };

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
            src="/logo_transparent.png"
            aria-label="3Dlicious logo"
          />
        </Link>
        <HStack h={20} spacing={6} onMouseLeave={() => setShowMenu(false)}>
          {/* <NavItemMenu item="shop" /> */}
          {/* <NavItemMenu item="about" /> */}
          {/* <NavItemMenu item="contact" /> */}
          <Menu isOpen={showMenu}>
            <Link href="/store">
              <MenuButton
                as={Button}
                fontWeight="normal"
                background="transparent"
                // rightIcon={<BsChevronDown />}
                // borderWidth={2}
                // h={10}
                onClick={() => setShowMenu(false)}
                onMouseEnter={() => setShowMenu(true)}
                _focus={{ outline: "none" }}
                _expanded={{ background: "none" }}
                _hover={{ background: "none" }}
              >
                SHOP
              </MenuButton>
            </Link>
            <MenuList
              backgroundColor="transparent"
              onMouseLeave={() => setShowMenu(false)}
            >
              <MenuItem>
                <Link href="/store/meals">Meals</Link>
              </MenuItem>
              <MenuItem>
                <Link href="store/supply">Supply Kits</Link>
              </MenuItem>
              <MenuItem>
                <Link href="store/printers">3Dlicious Printers</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link href="/about">
            <Text _hover={{ cursor: "pointer" }}>ABOUT</Text>
          </Link>
          <Link href="/contact">
            <Text _hover={{ cursor: "pointer" }}>CONTACT</Text>
          </Link>
        </HStack>
      </HStack>
      <HStack pos="absolute" top="3vh" right="4%" spacing={30}>
        <Link href="/cart">
          <Image
            w={50}
            h={50}
            src="shopping-plate1.png"
            aria-label="Shopping Cart"
          />
        </Link>
        <Link href="/account">
          <Image src="account.png" w={50} h={50} aria-label="Account" />
        </Link>
      </HStack>
    </>
  );
};

export default Navbar;
