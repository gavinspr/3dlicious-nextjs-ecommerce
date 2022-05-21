import React from "react";
import { ContactDetails, CONTACT_DETAILS } from "../constants";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

// todo: add "real" info and links to contact icons

const About = () => {
  return (
    <VStack h="56vh" w="65%" mt={-10}>
      <VStack w="70%" textAlign="justify">
        <Heading>3Dlicious: Meals On Demand</Heading>
        <HStack>
          <Text w="60%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lacinia risus id cursus tempor. Nam ornare consectetur mattis.
            Praesent vitae arcu sit amet purus pulvinar congue ut eget risus.
            Cras ut ipsum in nisl tempor lobortis. Integer in faucibus risus,
            sagittis venenatis erat. Integer molestie eros orci, at vulputate
            nisl blandit et. Donec pharetra venenatis libero nec volutpat.
            Vivamus id lorem fermentum, consequat magna congue, accumsan felis.
            Fusce a hendrerit ipsum. In lobortis et mi vitae tincidunt. Nulla
            sit amet accumsan nisi, eu faucibus justo. Suspendisse potenti. In
            molestie lorem pulvinar arcu posuere vulputate. Ut viverra velit ut
            nulla accumsan cursus. Ut auctor mi diam, sit amet tristique sem
            lacinia quis. Quisque vitae urna tempus, sollicitudin arcu eget,
            mollis lectus.
          </Text>
          <Box w="40%">
            <Image boxSize="fit-content" src="/logo.svg" />
          </Box>
        </HStack>
        <Text>
          Mauris ac urna ac justo tincidunt ullamcorper ac id leo. Curabitur
          finibus, diam a sollicitudin imperdiet, ante elit rhoncus est, eu
          imperdiet odio lectus ac nisi. Suspendisse vulputate orci laoreet,
          laoreet sapien vel, euismod nisl. Nulla sit amet interdum nibh, vel
          venenatis lacus. Nulla non tincidunt ante. Nunc id eros mattis,
          rhoncus ex et, sollicitudin elit. Sed vel nibh blandit, laoreet mauris
          eget, sollicitudin leo. Morbi eu mauris egestas, aliquet lectus id,
          tempus diam. In sodales accumsan tellus a imperdiet. Nam et tellus
          commodo, rhoncus dolor eu, viverra est. Fusce nec posuere lectus.
          Aenean viverra massa justo, sit amet sagittis justo bibendum rhoncus.
          Pellentesque nec velit erat. Etiam dignissim convallis elit, ut
          hendrerit velit egestas quis. Nulla fermentum aliquet elit vitae
          vestibulum. Sed rutrum porttitor nisl.
        </Text>
        <Text pt={2}>
          Morbi sodales porta quam, vitae rutrum ligula. Nulla rutrum ultricies
          consequat. Aliquam bibendum dolor pellentesque velit tincidunt, sit
          amet faucibus libero rhoncus. Fusce ac auctor tellus. Curabitur
          molestie magna neque, in dictum dolor laoreet vel. Duis in lectus
          lectus. Cras bibendum ligula sed turpis mattis pellentesque. Nullam
          sem ante, varius at viverra id, imperdiet a orci. Proin at ligula
          eros. Donec leo quam, blandit ut nisi a, rhoncus dapibus nibh. Fusce
          dolor est, placerat eu rutrum nec, pellentesque vitae urna.
        </Text>
      </VStack>
      <HStack>
        {CONTACT_DETAILS.map(
          ({ name, color, link, icon }: ContactDetails, index: number) => (
            <IconButton
              key={index}
              background={`${color}.500`}
              icon={icon}
              aria-label={`${name} Contact`}
              _hover={{ background: `${color}.300` }}
            />
          )
        )}
      </HStack>
    </VStack>
  );
};

export default About;
