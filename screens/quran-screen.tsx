import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base";
import React from "react";

export const QuranScreen = () => {

  const navigation = useNavigation<any>()

  return (
    <View w={"full"} h="full" alignItems="center" justifyContent="center" >
      <Button onPress={() => navigation.navigate("Test")}>Test</Button>
    </View>
  )
}

export default QuranScreen
