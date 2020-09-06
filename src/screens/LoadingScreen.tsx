import React from "react";
import { View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "../theme/colors";

const LoadingScreen = () => {
  return (
    <LoaderContainer>
      <ActivityIndicator color={colors.primary} size={"large"} />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bg};
`;

export default LoadingScreen;
