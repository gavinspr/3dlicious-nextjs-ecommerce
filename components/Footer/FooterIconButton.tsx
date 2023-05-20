import React, { JSXElementConstructor, ReactElement } from "react";
import { IconButton } from "@chakra-ui/react";

type PropTypes = {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  label: string;
};

const FooterIconButton = ({ icon, label }: PropTypes) => {
  return (
    <IconButton
      background="none"
      icon={icon}
      aria-label={label}
      _hover={{
        transform: "scale(1.3)",
        transition: "350ms ease all",
      }}
    />
  );
};

export default FooterIconButton;
