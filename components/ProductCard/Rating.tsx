import React from "react";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { MdStar, MdStarBorder } from "react-icons/md";

// todo: onclick takes to ratings page

type PropTypes = {
  rating: number;
  review_count: number;
};

const Rating = ({ rating, review_count }: PropTypes) => {
  const maxRating = 5;

  const getStarIcon = (index: number) => (
    <Icon
      as={index < rating ? MdStar : MdStarBorder}
      color={index < rating ? "gold" : "gray.300"}
      boxSize={4}
    />
  );

  return (
    <Flex w="50%" align="center" gap={2}>
      <HStack spacing={1} mt={1}>
        {[...Array(maxRating)].map((_, index) => (
          <Box key={index}>{getStarIcon(index)}</Box>
        ))}
      </HStack>
      <Text fontSize={12} color={"blue.400"}>
        {review_count} reviews
      </Text>
    </Flex>
  );
};

export default Rating;
