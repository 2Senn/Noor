import React from "react";
import { View, Text, Image, HStack } from 'native-base'
import Hijri from "../api-related/hijri";
import { StyleSheet } from "react-native";


export const PrayHeader = () => {

  //call api
  const hijriDate = Hijri()

  return (
    <HStack alignItems="center" space={3} justifyContent="center" >
      <Image alt="Icon by Freepik" source={require("../../src/images/calendar.png")} width={25} height={25} />
      <Text style={styles.hijri}>{hijriDate}</Text>
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
