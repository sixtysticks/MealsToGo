import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { SvgXml } from "react-native-svg";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)``;

const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.headingBold};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.text.disabled};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-top: ${(props) => props.theme.space[1]};
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

const ClosedLabel = styled.Text`
  color: red;
  padding-right: 8px;
  padding-top: 1px;
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    photos = [
      "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    ],
    address = "100 Random St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={3}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={24} height={24} />
              ))}
            </Rating>
            <OpenSection>
              {isClosedTemporary && (
                <ClosedLabel>CLOSED TEMPORARILY</ClosedLabel>
              )}
              {isOpenNow && <SvgXml xml={open} width={24} height={24} />}
            </OpenSection>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
