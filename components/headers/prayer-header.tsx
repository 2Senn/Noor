import React from "react";
import { View, Text, Image, HStack, Icon, VStack } from 'native-base'
import Hijri from "../api-related/hijri";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Time from "../api-related/current-time";


export const PrayHeader = () => {

  //call api
  const hijriDate = Hijri()
  const time = Time()

  return (
    <HStack alignItems="center" space={3} justifyContent="center" >
      <Image alt="Icon by Freepik" source={require("../../src/images/calendar.png")} width={25} height={25} />
      <VStack space={2}>
        <Text style={styles.hijri}>{hijriDate}</Text>
        <Text style={styles.hijri}>{time}</Text>
      </VStack>
    </HStack>
  )
}

const styles = StyleSheet.create({
  hijri: {
    fontSize: 14,
    fontWeight: '600'
  }
})

export default PrayHeader
