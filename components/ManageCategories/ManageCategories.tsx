import React, { useState } from "react";
import { HStack } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import { categoryManageOptions } from "../../constants";
import Form from "./Form/Form";

const ManageCategories = () => {
  const [selectedView, setSelectedView] = useState<string>(
    categoryManageOptions[0]
  );

  return (
    <HStack h="800" w="100%" outline="1px solid green">
      <Sidebar selectedView={selectedView} setSelectedView={setSelectedView} />
      <Form selectedView={selectedView} />
    </HStack>
  );
};

export default ManageCategories;
