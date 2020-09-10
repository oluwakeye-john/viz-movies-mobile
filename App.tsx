import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import LoadingScreen from "./src/screens/LoadingScreen";

import { colors } from "./src/theme/colors";

import { store, persistor } from "./src/redux/store";
import TabNavigation from "./src/navigation/tab";

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<LoadingScreen />} persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={colors.statusBarStyle} />
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}
