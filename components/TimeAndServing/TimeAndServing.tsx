import React from "react";
import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { IoIosPeople, IoMdStopwatch } from "react-icons/io";

type PropTypes = {
  cookTime: number;
  servings: number;
};

const TimeAndServing = ({ cookTime, servings }: PropTypes) => {
  return (
    <Flex justify="flex-end">
      <HStack pr={1} justify="end">
        <HStack spacing={0}>
          <Text fontSize={15}>{cookTime}</Text>
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
