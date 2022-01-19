import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)``;

const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
`;

const OpenSection = styled.View`
  flex-direction: row;
`;

export default {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  OpenSection,
};
