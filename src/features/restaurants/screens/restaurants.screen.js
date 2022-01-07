import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[2]};
`;

const SearchBar = styled(Searchbar)`
  elevation: 3;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[0]};
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SearchContainer>
        <SearchBar placeholder="Search" onChangeText={() => {}} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </>
  );
};
