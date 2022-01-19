import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import open from "../../../../assets/open";
import star from "../../../../assets/star";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  OpenSection,
} from "./restaurant-info-card.styles";

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
    <RestaurantCard elevation={3}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Spacer position="bottom" size="medium">
          <Text variant="title">{name}</Text>
        </Spacer>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={star} width={24} height={24} key={index} />
            ))}
          </Rating>
          <OpenSection>
            {isClosedTemporary && (
              <Spacer position="left" size="large">
                <Text variant={"label"}>CLOSED TEMPORARILY</Text>
              </Spacer>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                <SvgXml xml={open} width={24} height={24} />
              </Spacer>
            )}
          </OpenSection>
        </Section>
        <Spacer position="top" size="small">
          <Text variant="subtitle">{address}</Text>
        </Spacer>
      </Info>
    </RestaurantCard>
  );
};
