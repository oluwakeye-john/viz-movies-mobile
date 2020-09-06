import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../theme/colors";
import Details from "../screens/DetailsScreen";
import Popular from "../screens/PopularScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headerBg },
        headerTintColor: colors.headerTint,
      }}
    >
      <Stack.Screen name="Popular" component={Popular} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
