import React from "react";
import styled from "styled-components/native";
import { colors } from "../theme/colors";

const SearchBar = ({ onTextChange }: any) => {
  const handleReturn = ({ nativeEvent }: any) => {
    return onTextChange(nativeEvent.text);
  };
  return (
    <Input
      returnKeyType="search"
      onSubmitEditing={handleReturn}
      placeholder="Search for movies"
    />
  );
};

const Input = styled.TextInput`
  border: 1px solid ${colors.tabColor};
  border-radius: 6px;
  padding: 10px;
  color: ${colors.text};
  width: 100%;
  margin-bottom: 20px;
`;

export default SearchBar;
