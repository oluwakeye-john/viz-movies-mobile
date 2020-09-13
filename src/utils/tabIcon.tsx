import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

interface tabIconType {
  routeName: string;
  focused: boolean;
}

const TabIcon = ({ routeName, focused }: tabIconType) => {
  let icon = "";
  switch (routeName) {
    case "Home":
      icon = "home";
      break;
    case "Search":
      icon = "search";
      break;
    case "Favorites":
      icon = "star";
      break;
    case "Downloads":
      icon = "cloud-download";
      break;
    case "About":
      icon = "person";
      break;
  }
  return (
    <MaterialIcons
      name={icon}
      size={20}
      color={focused ? colors.primary : colors.tabColor}
    />
  );
};

export default TabIcon;
