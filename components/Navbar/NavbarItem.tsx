import React, { MouseEventHandler } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

type PropTypes = {
  name: string;
  currentPage: string;
  onMouseEnter: MouseEventHandler<HTMLParagraphElement>;
};

const NavbarItem = ({ name, currentPage, onMouseEnter }: PropTypes) => {
  return (
    <Link href={`/${name}`}>
      <Text
        color={currentPage === name ? "green" : "black"}
        onMouseEnter={onMouseEnter}
        cursor="pointer"
        _hover={{
          transform: "scale(1.2)",
          transition: "350ms ease all",
        }}
      >
        {name.toUpperCase()}
      </Text>
    </Link>
  );
};

export default NavbarItem;
