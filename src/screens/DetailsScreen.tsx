import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateMovieDetail, addToFavorites } from "../redux/actions/movies";
import { fullBaseUrl } from "../api/constants";
import { AbsoluteContainer } from "../components/container";
import LoadingScreen from "./LoadingScreen";
import styled from "styled-components/native";
import { colors } from "../theme/colors";
import {
  Image,
  View,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Details = ({
  route,
  updateMovieDetail,
  navigation,
  addToFavorites,
  favorites,
}: any) => {
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

  const handleAddToFavorite = () => {
    addToFavorites(detail);
  };

  const checkFavorite = () => {
    const check = favorites.map((fav: any) => {
      if (fav.id === detail.id) {
        console.log("found");
        return true;
      } else {
        return false;
      }
    });
    console.log("lll", check);
    if (check.includes(true)) {
      console.log("already");
      return colors.primary;
    } else {
      console.log("new");
      return "#000";
    }
  };

  const isFavorite = checkFavorite();
  console.log("fav", isFavorite);
  return (
    <AbsoluteContainer>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView>
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
              <TouchableOpacity onPress={handleAddToFavorite}>
                <FontAwesome name="heart" size={25} color={isFavorite} />
              </TouchableOpacity>
              <DetailTagLine>``{detail.tagline}``</DetailTagLine>

              <DetailTabList>
                <DetailTab>
                  <MaterialIcons
                    color={colors.text}
                    name="rate-review"
                    size={20}
                  />
                  <DetailTabText>{detail.vote_average}/10</DetailTabText>
                </DetailTab>
                <DetailTab>
                  <MaterialIcons
                    color={colors.text}
                    name="date-range"
                    size={20}
                  />
                  <DetailTabText>{detail.release_date}</DetailTabText>
                </DetailTab>
                <DetailTab>
                  <MaterialIcons color={colors.text} name="timer" size={20} />
                  <DetailTabText>{detail.runtime} minutes</DetailTabText>
                </DetailTab>
              </DetailTabList>

              <DetailText>{detail.overview}</DetailText>
            </DetailMain>
          </ImageBackground>
        </ScrollView>
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
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 20px;
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

const DetailTabList = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin: 20px 0;
`;

const DetailTab = styled.View`
  width: 33.3%;
  text-align: center;
  color: ${colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailTabText = styled.Text`
  color: ${colors.text};
  margin-top: 5px;
`;

const mapStateToProps = (state: any) => ({
  favorites: state.moviesReducer.favorites,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateMovieDetail: (id: number) => dispatch(updateMovieDetail(id)),
    addToFavorites: (favorite: any) => dispatch(addToFavorites(favorite)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
