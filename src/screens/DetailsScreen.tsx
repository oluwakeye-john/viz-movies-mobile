import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateMovieDetail } from "../redux/actions/movies";
import { fullBaseUrl } from "../api/constants";
import { AbsoluteContainer } from "../components/container";
import LoadingScreen from "./LoadingScreen";
import styled from "styled-components/native";
import { colors } from "../theme/colors";
import { Image, View, ImageBackground } from "react-native";

const Details = ({ route, updateMovieDetail, navigation }: any) => {
  const id = route.params.id;
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const image = `${fullBaseUrl}/${detail.backdrop_path}`;
  const image2 = `${fullBaseUrl}/${detail.poster_path}`;

  navigation.setOptions({
    title: detail.title,
  });

  useEffect(() => {
    updateMovieDetail(id).then((resp: any) => {
      setLoading(false);
      setDetail(resp);
    });
  }, []);

  return (
    <AbsoluteContainer>
      {loading ? (
        <LoadingScreen />
      ) : (
        <View>
          <DetailView style={{ position: "relative" }}>
            <ImageBackground
              resizeMode="cover"
              source={{ uri: image2, width: "100%", height: "100%" }}
              style={{
                width: "100%",
                height: "100%",
              }}
              imageStyle={{ opacity: 0.05 }}
            >
              <Image
                source={{ uri: image, width: "100%", height: 200 }}
                resizeMode="cover"
              />

              <DetailMain>
                <DetailTitle>{detail.title}</DetailTitle>
                {/* <DetailTagLine>``{detail.tagline}``</DetailTagLine> */}
                <DetailText>{detail.overview}</DetailText>
              </DetailMain>
            </ImageBackground>
          </DetailView>
        </View>
      )}
    </AbsoluteContainer>
  );
};

const DetailView = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

const DetailMain = styled.View`
  padding: 10px;
  align-items: center;
`;

const DetailTitle = styled.Text`
  color: ${colors.text};
  font-size: 28px;
  margin: 20px 0;
  font-weight: bold;
  text-align: center;
`;

const DetailTagLine = styled.Text`
  font-style: italic;
  color: ${colors.text};
  font-size: 20px;
  margin: 10px 0;
  width: 80%;
  text-align: center;
`;

const DetailText = styled.Text`
  color: ${colors.text};
  opacity: 0.8;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 20px;
  text-align: center;
`;

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateMovieDetail: (id: number) => dispatch(updateMovieDetail(id)),
  };
};

export default connect(null, mapDispatchToProps)(Details);
