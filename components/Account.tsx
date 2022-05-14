import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Account = () => {
  return (
    <Box pos="absolute" top="2%" right="2%">
      <Image src="account.png" width="80%" aria-label="BlockSign logo" />
    </Box>
  );
};

export default Account;
