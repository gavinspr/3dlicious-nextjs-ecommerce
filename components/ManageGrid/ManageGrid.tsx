import React, { Dispatch, SetStateAction } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ManageView } from "../../@types";
import ManageGridItem from "./ManageGridItem";

type PropTypes = {
  setSelectedView: Dispatch<SetStateAction<ManageView>>;
};

const ManageGrid = ({ setSelectedView }: PropTypes) => {
  return (
    <SimpleGrid columns={3} spacing={20}>
      <ManageGridItem
        image_url="product_categories_icon.png"
        title="Manage Categories"
        setSelectedView={setSelectedView}
      />
      <ManageGridItem
        image_url="product_icon.png"
        title="Manage Products"
        setSelectedView={setSelectedView}
      />
      <ManageGridItem
        image_url="advertising_icon.jpg"
        title="Manage Advertisements"
        setSelectedView={setSelectedView}
      />
      <ManageGridItem
        image_url="order_icon.png"
        title="View Orders"
        setSelectedView={setSelectedView}
      />
      <ManageGridItem
        image_url="users_icon.png"
        title="View Users"
        setSelectedView={setSelectedView}
      />
      <ManageGridItem
        image_url="messages_icon.png"
        title="View Messages"
        setSelectedView={setSelectedView}
      />
    </SimpleGrid>
  );
};

export default ManageGrid;
