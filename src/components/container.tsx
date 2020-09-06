import React from "react";
import styled from "styled-components";
import { colors } from "../theme/colors";

const Container = styled.View`
  background-color: ${colors.bg};
  flex: 1;
  padding: 20px 0;
`;

export const AbsoluteContainer = styled(Container)`
  padding: 0;
`;

export default Container;
