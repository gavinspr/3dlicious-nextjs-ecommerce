import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { ManageGrid, ManageCategories } from "../components";
import { ManageView } from "../@types";
import { FaChevronLeft } from "react-icons/fa";

// ? change ManageView flow into array like in Sidebar

const Manage = () => {
  const [selectedView, setSelectedView] = useState<ManageView>("home");

  return (
    <Center
      gap={4}
      w="100%"
      top="20vh"
      flexDir="column"
      outline="1px solid red"
    >
      <Center w="80%" pos="relative">
        {selectedView !== "home" && (
          <Flex
            pos="absolute"
            left={0}
            align="center"
            cursor="pointer"
            onClick={() => setSelectedView("home")}
            _hover={{ transform: "scale(1.2)", transition: "350ms ease all" }}
          >
            <Icon as={FaChevronLeft} w={8} h={8} />
            <Text fontWeight="semibold">Back</Text>
          </Flex>
        )}
        <Heading>Manage Store</Heading>
      </Center>
      {selectedView === "home" && (
        <ManageGrid setSelectedView={setSelectedView} />
      )}
      <Box w="80%">{selectedView === "categories" && <ManageCategories />}</Box>
    </Center>
  );
};

export default Manage;
