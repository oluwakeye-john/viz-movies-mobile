import React from "react";
import styled from "styled-components/native";
import Container from "../components/container";
import SearchBar from "../components/input";
import { updateSearch } from "../redux/actions/movies";

import { connect } from "react-redux";
import CardList from "../components/cardList";

const Search = ({ updateSearch, search_result }: any) => {
  const onTextChange = (text: string) => {
    updateSearch(text);
  };

  return (
    <Container>
      <SearchView>
        <SearchBar onTextChange={onTextChange} />
        <CardList movies={search_result} />
      </SearchView>
    </Container>
  );
};

const SearchView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const mapStateToProps = (state: any) => {
  return {
    search_result: state.moviesReducer.search_result,
    search_text: state.moviesReducer.search_text,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateSearch: (text: string) => dispatch(updateSearch(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
