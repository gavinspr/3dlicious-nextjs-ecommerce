import React, { Dispatch, SetStateAction } from "react";
import { Center, Heading, Image } from "@chakra-ui/react";
import { ManageView } from "../../@types";

type PropTypes = {
  image_url: string;
  title: string;
  setSelectedView: Dispatch<SetStateAction<ManageView>>;
};

const ManageGridItem = ({ image_url, title, setSelectedView }: PropTypes) => {
  const view = title.split(" ")[1].toLowerCase() as ManageView;

  return (
    <Center
      w={325}
      h={300}
      border="1px solid #ddd"
      boxShadow="0 2px 4px gray"
      borderRadius={8}
      cursor="pointer"
      pos="relative"
      _hover={{ transform: "scale(1.08)", transition: "350ms ease all" }}
      onClick={() => setSelectedView(view)}
    >
      <Image w="50%" h="50%" src={image_url} />
      <Heading fontSize={22} pos="absolute" bottom={3}>
        {title}
      </Heading>
    </Center>
  );
};

export default ManageGridItem;
