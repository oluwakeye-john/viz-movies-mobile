import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../theme/colors";
import Favorite from "../screens/FavoriteScreen";
import Details from "../screens/DetailsScreen";

const Stack = createStackNavigator();

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headerBg },
        headerTintColor: colors.headerTint,
      }}
    >
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
