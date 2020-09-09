import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../theme/colors";
import Details from "../screens/DetailsScreen";
import Search from "../screens/SearchScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headerBg },
        headerTintColor: colors.headerTint,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
