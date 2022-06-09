import { StatusBar } from "expo-status-bar";
import { Box, Text, useColorModeValue, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import AnimatedColorBox from "../components/animated-color-box";

export const MainScreen = () => {
  const bg = useColorModeValue("primary.300", "#000")
  const statusBarColor = useColorModeValue("#000", "grey")
  return (
    <AnimatedColorBox
      flex={1}
      bg={bg}
      w="full"
    >
      <StatusBar
        hidden
      />
      <View style={styles.header}>
        <View style={styles.inner}>
          <Box backgroundColor="#FEDBD0" style={StyleSheet.absoluteFill} />
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
  }
})

export default MainScreen
