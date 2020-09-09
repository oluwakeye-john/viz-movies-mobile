// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";

import { store, persistor } from "./src/redux/store";
import Home from "./src/screens/PopularScreen";
import { colors } from "./src/theme/colors";
import Search from "./src/navigation/Search";
import LoadingScreen from "./src/screens/LoadingScreen";
import TabIcon from "./src/utils/tabIcon";
import HomeNavigator from "./src/navigation/Home";
import Favorites from "./src/navigation/Favorite";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<LoadingScreen />} persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={colors.statusBarStyle} />
        <NavigationContainer>
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
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Downloads" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}
