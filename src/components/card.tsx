import React from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { posterBaseUrl } from "../api/constants";

const Card = ({ movie }: any) => {
  const img = `${posterBaseUrl}/${movie.poster_path}`;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.push("Details", { id: movie.id });
  };
  return (
    <CardContainer>
      <TouchableOpacity onPress={handlePress}>
        {/* <Text>{movie.title}</Text> */}
        <Image
          // defaultSource={require("../assets/video1.png")}
          source={{ uri: img, width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  width: 30%;
  height: 150px;
  background-color: #aaa;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export default Card;
