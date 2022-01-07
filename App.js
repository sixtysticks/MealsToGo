import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

const isAndroid = Platform.OS === "android";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <RestaurantsScreen />
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
