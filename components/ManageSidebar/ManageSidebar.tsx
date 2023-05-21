import React from "react";
import { Box, Center, Heading, HStack, VStack } from "@chakra-ui/react";

 // ! delete?

const ManageSidebar = () => {
  return (
    <VStack
      borderWidth={2}
      borderColor="red"
      h="96%"
      w="30%"
      ml={4}
      // align="center"
      // justify="center"
      alignItems="left"
      spacing={10}
    >
      <Heading
        fontSize="175%"
        mt={2}
        // borderWidth={2}
        textAlign="center"
      >
        Manage Store
      </Heading>

      <Heading
        fontSize="100%"
        // borderWidth={2}
        pl={4}
      >
        Manage Product Category
      </Heading>
      {/* <p>Manage Sub Category</p> */}
      <p>Manage Products</p>
      <p>Manage Advertisements</p>
      <p>View Orders</p>
      <p>View Users</p>
      <p>View Messages</p>
    </VStack>
  );
};

export default ManageSidebar;
