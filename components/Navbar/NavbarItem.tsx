import React, { MouseEventHandler } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

type PropTypes = {
  name: string;
  currentPage: boolean;
  onMouseEnter: MouseEventHandler<HTMLParagraphElement>;
};

const NavbarItem = ({ name, currentPage, onMouseEnter }: PropTypes) => {
  return (
    <Link href={`/${name}`}>
      <Text
        color={currentPage ? "green" : "black"}
        onMouseEnter={onMouseEnter}
        cursor="pointer"
        _hover={{
          textDecor: "underline",
        }}
        fontSize={24}
      >
        {name.toUpperCase()}
      </Text>
    </Link>
  );
};

export default NavbarItem;
