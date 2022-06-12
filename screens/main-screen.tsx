import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Box, HStack, Image, Text, useColorModeValue, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import AnimatedColorBox from "../components/animated-color-box";
import PrayHeader from "../components/headers/prayer-header";
import PrayerData from "../components/api-related/prayer-cards";

export const MainScreen = () => {

  //colors
  const bg = useColorModeValue("#FEEAE6", "#000")

  const method = 3
  const city = "Amman"
  const country = "Jordan"

  return (
    <AnimatedColorBox
      flex={1}
      bg={bg}
      w="full"
      p={3}
    >
      <StatusBar
        hidden
      />
      <View style={styles.header}>
        <View style={styles.inner}>
          <PrayHeader />
        </View>
      </View>
      <View style={styles.cards}>
        <View style={styles.inner}>
          <PrayerData method={method} city={city} country={country} />
        </View>
      </View>
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    padding: 5,
  },
  inner: {
    flex: 1
  },
  cards: {
    width: "100%",
    height: "50%",
    padding: 5,
  }
})

export default MainScreen
