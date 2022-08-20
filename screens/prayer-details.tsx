import { Feather } from "@expo/vector-icons"
import { Box, HStack, Icon, Text, useColorModeValue, View, VStack } from "native-base"
import React from "react"
import AnimatedColorBox from "../components/animated-color-box"
import LottieView from 'lottie-react-native'
import { SPACING, width } from "../components/api-related/prayer-cards"
import { ScrollView, StyleSheet } from "react-native"
import RandomHadith from "../components/api-related/random-hadiths"
import * as Animatable from 'react-native-animatable'


const DURATION = 400

interface Props {
  navigation: any,
  route: any,
}
//Animations
const animationTitle = {
  0: { opacity: 0, translateY: 100 },
  1: { opacity: 1, translateY: 0 }
}
const animationHadith = {
  0: { opacity: 0, translateX: 100 },
  1: { opacity: 1, translateX: 0 }
}

export const PrayerDetails = (props: Props) => {

  const { item } = props.route.params
  return (
    <AnimatedColorBox
      flex={1}
      w="full"
      bg={item.color}
      p={5}
    >
      <View h="15%" w="100%" zIndex={2} >
        <HStack position={"absolute"} space={1} justifyContent="flex-start">
          <Icon
            as={Feather}
            name="x-circle"
            size="3xl"
            color={item.fontColor}
            onPress={() => {
              props.navigation.navigate("Home")
            }}
          />
        </HStack>
      </View>
      <View w="100%" h="45%" position="absolute" zIndex={0}>
        <LottieView style={styles.image} source={item.image} autoPlay />
      </View>
      <View w="100%" h="20%">
        <VStack space={5} zIndex={1} position={'absolute'} right={SPACING}>
          <Animatable.Text
            useNativeDriver
            animation={animationTitle}
            delay={DURATION + 100}
            style={{ color: item.fontColor, fontSize: 28, paddingVertical: 10 }}>{item.name}</Animatable.Text>
          <Animatable.Text
            useNativeDriver
            animation={animationTitle}
            delay={DURATION + 200}
            style={{ color: item.fontColor, fontSize: 25, paddingVertical: 10 }}>{item.time}</Animatable.Text>
        </VStack>
      </View>
      <Animatable.View
        useNativeDriver
        animation={animationHadith}
        delay={DURATION + 300}
        style={{
          width: "100%",
          height: "50%",
          borderRadius: 45,
          backgroundColor: "rgba(255,255,255,0.5)",
          top: 15,
          padding: 5,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 10 }} >
          <RandomHadith />
        </ScrollView>
      </Animatable.View>
    </AnimatedColorBox>
  )
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 24,
    fontFamilt: "Naskh"
  },
  time: {
    fontSize: 25,
  },
  image: {
  },
  prayTable: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
  }
})

export default PrayerDetails
