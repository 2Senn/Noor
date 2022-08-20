import { FlatList, Icon, Text, View } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Quran from "../src/mushafs/hafs.json"
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



export const Test = () => {
  const [loaded] = useFonts({
    Naskh: require('../src/fonts/naskhBold.ttf'),
    Khat: require('../src/fonts/hafs.ttf')
  });

  const navigation = useNavigation<any>()


  return (
    <View w="full" h="full" p={5}>
      <Icon as={Feather} name="arrow-left" size="xl" onPress={() => navigation.navigate("القران")} />
    </View>
  )
}

export default Test
