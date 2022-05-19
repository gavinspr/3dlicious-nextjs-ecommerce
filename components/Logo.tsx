import React from "react";
import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box pos="absolute" top={0} left="3%">
      <Image src="/logo.png" w="50%" aria-label="BlockSign logo" />
    </Box>
  );
};

export default Logo;
