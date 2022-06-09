import { Ionicons } from "@expo/vector-icons";
import { HStack, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font'

interface Tab {
  route: any,
  size: number,
  focused: boolean,
  iconName: any,
  color: string,

}



const Tab = (props: Tab) => {

  const [loaded] = useFonts({
    Naskh: require('../src/fonts/naskhBold.ttf'),
  });

  if (!loaded) {
    return null
  }


  return (
    <View flex={1}>
      <HStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        space={1}
        margin={2}
        px={2}
      >
        <Text fontFamily={'Naskh'} style={styles.tabtext}>{props.focused ? props.route.name : null}</Text>
        <Ionicons name={props.iconName} size={props.size} color={props.color} />
      </HStack>
    </View>
  )
}

const styles = StyleSheet.create({
  tabtext: {
    fontSize: 12,
    marginHorizontal: 10,
    color: "#FEEAE6"
  }
})

export default Tab

