import { StatusBar } from "expo-status-bar";
import { Box, Button, HStack, Icon, Image, Text, useColorModeValue, View, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, useWindowDimensions } from "react-native";
import AnimatedColorBox from "../components/animated-color-box";
import PrayHeader from "../components/headers/prayer-header";
import PrayerData, { height } from "../components/api-related/prayer-cards";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import About, { SPRING_CONFIG } from "../components/bottom-sheets/about";

export const MainScreen = () => {

  //colors
  const bg = useColorModeValue("#FEEAE6", "#000")

  //PrayerSettings
  const method = 3;
  const city = "Amman"
  const country = "Jordan"

  //BottomSheet stuff
  const dimensions = useWindowDimensions()
  const top = useSharedValue(
    dimensions.height
  )
  

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
        <HStack justifyContent="space-between">
          <TouchableOpacity
            onPress={() => {
              top.value = withSpring(
                dimensions.height / 3,
                SPRING_CONFIG
              )
            }
            }
          >
            <Icon as={FontAwesome5} name="question-circle" size={"xl"} color={"rgba(0,0,0,0.6)"} />
          </TouchableOpacity>
          <PrayHeader />
        </HStack>
      </View>
      <View style={styles.cards}>
        <View style={styles.inner}>
          <PrayerData method={method} city={city} country={country} />
        </View>
      </View>
      <About top={top} dimensions={dimensions} />
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
