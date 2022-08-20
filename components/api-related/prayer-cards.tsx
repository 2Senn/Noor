import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { FlatList, HStack, Icon, Text, View, VStack } from "native-base";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import shortid from "shortid";
import Time from "./current-time";
import CompareTime from "../compare-time";
import TimeNumber from "../time";
import axios from 'axios'
import { parseInt } from "lodash";
import LoadingIndicator from "../loading-indicator";
import Prayers from "./pray-times";
import Hijri from "./hijri";
import DateAndTime from "../date-and-time";

export const { width, height } = Dimensions.get('screen')

export const SPACING = 10
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

  // Navigation
  const navigation = useNavigation<any>()

  // Use States
  const [prayers, setPrayers] = useState<any>([])
  const [wantedIndex, setWantedIndex] = useState<any>(2)
  const [loading, setLoading] = useState(true)

  // Flatlist Ref
  const cardRef = useRef(null)
  var time = TimeNumber() 
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${props.city}&country=${props.country}&method=${props.method}`
  

  useEffect(() => {
    async function fetchPrayers(){
      const request = await axios.get(url)
      setPrayers(request.data.data.timings)
      setLoading(false)
    }
    fetchPrayers()
    
  }, [url])

  useEffect(() => {
    if(!loading){
      const index = CompareTime(time, prayers.Fajr, prayers.Sunrise, prayers.Dhuhr, prayers.Asr, prayers.Maghrib, prayers.Isha)
      console.log(index)
      setWantedIndex(index)
    }
    onScrollToItemSelected()

  }, [time])
  // Data
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

    
  const onScrollToItemSelected = () => {
    
    if(cardRef.current){
      cardRef.current.scrollToIndex({index: wantedIndex})
    }
  }

  return (
    <VStack w="100%" h="100%" space={5}>
      {loading ? <LoadingIndicator size={100}/> : (
      <View w="100%" h="60%" >
          <View width={"100%"} height={"10%"} bottom={2}>
            <TouchableOpacity onPress={onScrollToItemSelected}>
              <Icon as={Feather} name={"refresh-cw"} size={"xl"}/>
            </TouchableOpacity>
          </View>
        <View flex={1}>
          <FlatList
            data={data}
            ref={cardRef}
            getItemLayout={(data, index) => ({
              length: CELL_WIDTH, offset: CELL_WIDTH * index * 2, index
            })}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={FULL_SIZE}
            decelerationRate={"fast"}
            inverted={true}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PrayDetails', { item })
                  }}
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
      </View>)}
      <View w="100%" h="10%" p={2}>
       <DateAndTime /> 
      </View>
      {loading ? <LoadingIndicator size={100} /> : (
      <View w="100%" h="80%" bgColor={"rgba(255, 223, 211, 0.7)"} p={5} borderRadius={"50%"}>
        <View flex={1}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <HStack style={styles.prayTable} space={7} >
                  <Text style={{ fontSize: 16 }} >{item.time}</Text>
                  <HStack space={3} >
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                    <Icon as={Feather} size="md" name={item.iconName} color={"black"} />
                  </HStack>
                </HStack>
              )
            }}
          />
        </View>
      </View>
      )}
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


