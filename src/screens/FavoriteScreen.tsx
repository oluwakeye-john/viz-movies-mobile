import React from "react";
import styled from "styled-components/native";
import Container from "../components/container";

import { connect } from "react-redux";
import CardList from "../components/cardList";

const Favorites = ({ favorites }: any) => {
  return (
    <Container>
      <FavoriteView>
        <CardList movies={favorites} />
      </FavoriteView>
    </Container>
  );
};

const FavoriteView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const mapStateToProps = (state: any) => {
  return {
    favorites: state.moviesReducer.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
