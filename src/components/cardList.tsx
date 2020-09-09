import React, { useState } from "react";
import styled from "styled-components/native";
import { colors } from "../theme/colors";
import { RefreshControl, ScrollView, Text, FlatList } from "react-native";
import Card from "./card";

const EmptyList = () => {
  return <EmptyCardList>No movies</EmptyCardList>;
};

const ListFooter = () => {
  return (
    <FlatListFooter>
      <FlatListFooterText>Pull to load more</FlatListFooterText>
    </FlatListFooter>
  );
};

const CardList = ({ movies, update, loadMore }: any) => {
  const [refreshing, setRefresh] = useState(false);
  const refresh = async () => {
    if (update) {
      setRefresh(true);
      await update();
      setRefresh(false);
    } else {
      setRefresh(false);
    }
  };

  const handleLoadMore = () => {
    console.log("reached");
    if (loadMore) {
      console.log("load more");
      loadMore();
    }
  };

  return (
    <CardListContainer>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        data={movies}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        ListEmptyComponent={<EmptyList />}
        ListFooterComponent={ListFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Card key={index} movie={item} />}
      />
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.View`
  color: ${colors.text};
  flex-direction: row;
  justify-content: space-evenly;
`;

const EmptyCardList = styled.Text`
  color: ${colors.text};
  text-align: center;
  margin-bottom: 20px;
`;

const FlatListFooter = styled.View`
  align-items: center;
`;

const FlatListFooterText = styled.Text`
  color: #fff;
`;
