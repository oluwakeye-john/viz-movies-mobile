import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/PopularScreen";
import { colors } from "../theme/colors";
import Search from "../navigation/Search";
import TabIcon from "../utils/tabIcon";
import HomeNavigator from "../navigation/Home";
import Favorites from "../navigation/Favorite";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ favorites }: any) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: colors.headerBg,
          borderWidth: 0,
        },
        activeTintColor: colors.primary,
        style: { borderTopWidth: 0 },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <TabIcon routeName={route.name} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={() => ({
          tabBarBadge: favorites.length,
        })}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  favorites: state.moviesReducer.favorites,
});

export default connect(mapStateToProps)(TabNavigation);
