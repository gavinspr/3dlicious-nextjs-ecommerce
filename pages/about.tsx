import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex flexDir="column" w="80%">
      <Flex
        borderBottom="5px solid"
        borderColor="green.600"
        gap={5}
        align="flex-end"
        mb={5}
      >
        <Heading fontWeight="normal" cursor="pointer">
          About 3Dlicious
        </Heading>
      </Flex>
      <Flex flexDir="column" gap={5} mb={5} fontSize={22}>
        <Text>
          At 3Dlicious, we are a leading name in the world of 3D printing food.
          Since our inception in 2037, we have been on a mission to redefine the
          way people experience and interact with food. With our cutting-edge
          technology, we bring culinary imagination to life, offering a wide
          range of delectable creations that push the boundaries of flavor,
          design, and convenience.
        </Text>
        <Text>
          In 2037, a team of passionate food enthusiasts and technology experts
          came together with a shared vision: to merge the realms of gastronomy
          and innovation. Driven by our love for extraordinary flavors and a
          desire to revolutionize the food industry, we embarked on a journey
          that would shape the future of dining.
        </Text>
        <Text>
          With relentless dedication and meticulous craftsmanship, we developed
          state-of-the-art 3D printers specifically designed for creating edible
          masterpieces. Combining the finest ingredients with precise
          engineering, we unlocked a whole new world of culinary possibilities.
        </Text>
        <Text>
          Using our proprietary software, we meticulously craft each detail,
          ensuring that every dish is a testament to our commitment to
          excellence. This revolutionary technology allows us to create
          intricate textures, shapes, and flavors that were once unimaginable.
          From delicate patterns adorning desserts to intricate layers in savory
          dishes, our software enables us to elevate your dining experience to
          new heights.
        </Text>
        <Text>
          At 3Dlicious, we believe that food should be an immersive experience
          that engages all your senses. We take pride in delivering not only
          exceptional taste but also captivating visual presentations that leave
          a lasting impression on your guests. Whether you're hosting an
          intimate gathering or a grand celebration, our 3D-printed delicacies
          are sure to elevate your dining experience to new heights.
        </Text>
        <Text>
          But our passion for innovation doesn't stop at the food itself. We
          also provide a comprehensive range of 3D printing supplies,
          accessories, and resources, empowering individuals and businesses to
          explore their own culinary creativity. From hobbyists and aspiring
          chefs to professional caterers and event planners, our goal is to
          inspire and enable everyone to unleash their imagination in the
          kitchen.
        </Text>
        <Text>
          Join us on this exciting journey into the future of food. Experience
          the extraordinary with 3Dlicious and let your taste buds embark on a
          truly unique culinary adventure. Welcome to a world where innovation
          meets flavor, and where your wildest gastronomic dreams become a
          delicious reality.
        </Text>
      </Flex>
      <Heading textAlign="center" my={5}>
        {" "}
        Embrace the Future of Food
      </Heading>
      <Image
        alignSelf="center"
        w={275}
        h={275}
        mb={-5}
        src="/logo.svg"
        aria-label="3Dlicious logo"
        _hover={{ cursor: "pointer" }}
      />
    </Flex>
  );
};

export default About;
