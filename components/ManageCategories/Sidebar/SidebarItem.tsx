import React, { Dispatch, SetStateAction } from "react";
import { Text } from "@chakra-ui/react";

type PropTypes = {
  option: string;
  selectedView: string;
  setSelectedView: Dispatch<SetStateAction<string>>;
};

const SidebarItem = ({ option, selectedView, setSelectedView }: PropTypes) => {
  return (
    <Text
      fontSize={18}
      cursor="pointer"
      textDecor={selectedView === option ? "underline" : "none"}
      onClick={() => setSelectedView(option)}
    >
      {option}
    </Text>
  );
};

export default SidebarItem;
