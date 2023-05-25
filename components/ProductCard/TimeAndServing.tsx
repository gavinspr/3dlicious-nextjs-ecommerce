import React from "react";
import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { IoIosPeople, IoMdStopwatch } from "react-icons/io";

type PropTypes = {
  cook_time: number;
  servings: number;
};

const TimeAndServing = ({ cook_time, servings }: PropTypes) => {
  return (
    <Flex w="50%" justify="flex-end">
      <HStack pr={1} justify="end" _hover={{ cursor: "pointer" }}>
        <HStack spacing={0}>
          <Text fontSize={15}>{cook_time}</Text>
          <Icon as={IoMdStopwatch} w="60%" h={4} color="gray" />
        </HStack>
        <HStack spacing={1}>
          <Text fontSize={14}>{servings}</Text>
          <Icon as={IoIosPeople} w="70%" h={5} color="blue.500" />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default TimeAndServing;
