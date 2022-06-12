import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { FlatList, HStack, Icon, Text, View, VStack } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import shortid from "shortid";

const { width, height } = Dimensions.get('screen')

const SPACING = 10
const CELL_WIDTH = width * 0.7
const CELL_HEIGHT = CELL_WIDTH * 0.6
const FULL_SIZE = CELL_WIDTH + SPACING * 2

interface PrayerOptions {
  method: number,
  city: string,
  country: string,
}


const PrayerData = (props: PrayerOptions) => {

  //Font
  const [loaded] = useFonts({
    Naskh: require('../../src/fonts/naskhBold.ttf'),
  });


  const [prayers, setPrayers] = useState<any>([])

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${props.city}&country=${props.country}&method=${props.method}`
  const fetchPrayers = useCallback(async () => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      setPrayers(json.data.timings)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchPrayers()
  }, [fetchPrayers])

  const data = [
    {
      key: shortid.generate(),
      name: 'الفجر',
      image: require("../../src/lottie/tea.json"),
      time: prayers.Fajr,
      color: "#e8d1c5",
      fontColor: "#000",
      iconName: "sunrise"
    },
    {
      key: shortid.generate(),
      name: 'الشروق',
      image: require("../../src/lottie/birds.json"),
      time: prayers.Sunrise,
      color: "#8ce8ff",
      fontColor: "#000",
      iconName: "cloud"
    },
    {
      key: shortid.generate(),
      name: 'الظهر',
      image: require("../../src/lottie/sun.json"),
      time: prayers.Dhuhr,
      color: "#eddcd2",
      fontColor: "#000",
      iconName: "sun"
    },
    {
      key: shortid.generate(),
      name: 'العصر',
      image: require("../../src/lottie/cloud.json"),
      time: prayers.Asr,
      color: "#fff1e6",
      fontColor: "#000",
      iconName: "wind"
    },
    {
      key: shortid.generate(),
      name: 'المغرب',
      image: require("../../src/lottie/red-sun.json"),
      time: prayers.Maghrib,
      color: "#fedbd0",
      fontColor: "#000",
      iconName: "sunset"
    },
    {
      key: shortid.generate(),
      name: 'العشاء',
      image: require("../../src/lottie/night.json"),
      time: prayers.Isha,
      color: "#000",
      fontColor: "#fff",
      iconName: "moon"
    },
  ]

  return (
    <VStack w="100%" h="100%" space={1}>
      <View width={"100%"} h="5%">
        <View flex={1}>
          <Text >إضغط لفائدة</Text>
        </View>
      </View>
      <View w="100%" h="60%" >
        <View flex={1}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={FULL_SIZE}
            decelerationRate={"fast"}
            inverted={true}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    width: CELL_WIDTH,
                    height: CELL_HEIGHT,
                    margin: SPACING,
                  }}
                >
                  <View style={{ flex: 1, padding: SPACING, justifyContent: 'center' }}>
                    <View
                      backgroundColor={item.color}
                      style={StyleSheet.absoluteFillObject}
                      borderRadius={15}
                      padding={SPACING}
                    >
                    </View>
                    <VStack position={"absolute"} space={5} zIndex={1} top={5} right={SPACING}>
                      <Text style={{ color: item.fontColor, fontSize: 28, paddingVertical: 10 }}>{item.name}</Text>
                      <Text style={{ color: item.fontColor, fontSize: 25, paddingVertical: 10 }}>{item.time}</Text>
                    </VStack>
                    <LottieView style={styles.image} source={item.image} autoPlay />
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
      <View w="100%" h="80%">
        <View flex={1}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <HStack style={styles.prayTable} space={7} >
                  <Text style={{ fontSize: 16 }} >{item.time}</Text>
                  <Text style={{ fontSize: 16 }}>{item.name}</Text>
                  <View alignItems="center" justifyContent="flex-end">
                    <Icon as={Feather} size="md" name={item.iconName} color={"black"} />
                  </View>
                </HStack>
              )
            }}
          />
        </View>
      </View>
    </VStack>
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
    height: "90%",
    alignSelf: "flex-start",
    resizeMode: "contain",
  },
  prayTable: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,


  }
})

export default PrayerData


