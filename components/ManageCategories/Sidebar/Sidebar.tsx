import React, { Dispatch, SetStateAction, useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";
import { categoryManageOptions } from "../../../constants";

type PropTypes = {
  selectedView: string;
  setSelectedView: Dispatch<SetStateAction<string>>;
};

const Sidebar = ({ selectedView, setSelectedView }: PropTypes) => {
  return (
    <VStack outline="1px solid blue" h="100%" w="25%">
      <Heading fontSize={28} mt={2}>
        Manage Categories
      </Heading>
      {categoryManageOptions.map((option: string, index: number) => (
        <SidebarItem
          key={`${option}-${index}`}
          option={option}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      ))}
    </VStack>
  );
};

export default Sidebar;
