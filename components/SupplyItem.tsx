import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { BsDropletFill } from "react-icons/bs";

type SupplyItemProps = {
  type: string;
};

const SupplyItem = ({ type }: SupplyItemProps) => {
  const [color, setColor] = useState<string | undefined>();

  const getColor = () => {
    switch (type) {
      case "fat":
        setColor("#FFA701");
        break;
      case "protein":
        setColor("#DC9682");

        break;
      case "fiber":
        setColor("#8E715F");

        break;
      case "starch":
        setColor("#8183a9");

        break;
      case "salty":
        setColor("#F3FAFD");

        break;
      case "spicy":
        setColor("#D83010");

        break;
      case "sour":
        setColor("#31FF00");

        break;
      case "savory":
        setColor("#FAFD0F");

        break;
      case "sweet":
        setColor("#E0BBE4");

        break;
      case "umami":
        setColor("#FC7F03");

        break;
      case "beefy":
        setColor("#693d3d");

        break;
      case "poultry":
        setColor("#F9B042");

        break;
      case "fishy":
        setColor("#FA8072");

        break;
      case "pork":
        setColor("#F9A195");

        break;
      case "vegetal":
        setColor("#3A9106");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    getColor();
  }, []);

  return color ? (
    <Tooltip label={type} hasArrow>
      <IconButton
        size=""
        color={color}
        background="none"
        aria-label="Supply Type"
        icon={<BsDropletFill />}
      />
    </Tooltip>
  ) : null;
};

export default SupplyItem;
