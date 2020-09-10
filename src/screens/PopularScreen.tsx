import React, { useEffect } from "react";
import Container from "../components/container";
import CardList from "../components/cardList";
import { connect } from "react-redux";
import { updatePopular, loadMore } from "../redux/actions/movies";

const Popular = ({
  navigation,
  popular,
  updatePopular,
  loadMore,
  popular_page,
}: any) => {
  useEffect(() => {
    updatePopular();
  }, []);

  const handleLoadMore = () => {
    loadMore(popular_page + 1);
  };

  return (
    <Container>
      <CardList
        movies={popular}
        update={updatePopular}
        loadMore={handleLoadMore}
      />
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    popular: state.moviesReducer.popular,
    popular_page: state.moviesReducer.popular_page,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updatePopular: () => dispatch(updatePopular()),
    loadMore: (newPage: number) => dispatch(loadMore(newPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
