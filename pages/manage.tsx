import { Box, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import axios from "axios";



const ManageSidebar = () => {
  const handleAddCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/category");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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
        onClick={handleAddCategory}
      >
        Add Category
      </Heading>
    </VStack>
  );
};

const ManageForm = () => {
  return (
    <VStack
      borderWidth={2}
      borderColor="blue"
      h="96%"
      w="66%"
      // ml={}
    >
      
    </VStack>
  );
};

const Manage = () => {
  return (
    <Center gap={4} w="100%" top="20vh" pos="absolute" flexDir="column">
      <HStack
        // borderWidth={2} borderColor="red"
        w="65%"
        h="700"
        align="left"
        spacing={4}
        background="white"
        p={2}
        borderRadius={20}
        overflow="auto"
        boxShadow="0 4px 8px #2D3748"
        borderWidth={2}
        // alignContent="center"
        // justify="center"
        alignItems="center"
        css={{
          "&::-webkit-scrollbar": {
            width: "1px",
            // width: "0",
            // visibility: "hidden",
            display: "none",
          },
          "&::-webkit-scrollbar-track": {
            width: "1px",
            // width: "0",
            // visibility: "hidden",
            display: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#3182CE",
            borderRadius: "24px",
          },
        }}
      >
        <ManageSidebar />
        <ManageForm />
      </HStack>
    </Center>
  );
};

export default Manage;
