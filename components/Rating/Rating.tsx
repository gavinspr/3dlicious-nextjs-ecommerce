import React from "react";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";

// todo: onclick takes to ratings page

type PropTypes = {
  rating: number;
  reviewCount: number;
};

const Rating = ({ rating, reviewCount }: PropTypes) => {
  const maxRating = 5;

  const roundedRating = Math.round(rating * 2) / 2;

  const renderStarIcon = (index: number) => {
    if (index < roundedRating) {
      return <Icon as={MdStar} color="gold" boxSize={4} />;
    } else if (index === Math.floor(rating) && rating % 1 !== 0) {
      return <Icon as={MdStarHalf} color="gold" boxSize={4} />;
    } else {
      return <Icon as={MdStarBorder} color="gray.300" boxSize={4} />;
    }
  };

  return (
    <Flex align="center" gap={1}>
      <Flex mt={1}>
        {[...Array(maxRating)].map((_, index) => (
          <Box key={index}>{renderStarIcon(index)}</Box>
        ))}
      </Flex>
      <Text
        fontSize={12}
        color="blue.400"
        // todo: link
      >
        ({reviewCount})
      </Text>
    </Flex>
  );
};
export default Rating;
