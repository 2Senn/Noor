import { Ionicons } from "@expo/vector-icons";
import { HStack, Text } from "native-base";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";


interface Tab {
  route: any,
  size: number,
  focused: boolean,
  iconName: any,
  color: string,

}

const bgColors: { [key: string]: string } =
{
  Prayer: "#FEDBD0",
  Quran: "#EBDDBE",
  Hadith: "#FEEAE6",
  About: "#E9D0C4"
};



const Tab = (props: Tab) => {

  return (
    <HStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      space={1}
      backgroundColor={props.focused ? bgColors[props.route.name] : null}
      borderRadius={100}
      margin={2}
      px={2}
    >
      <Ionicons name={props.iconName} size={props.size} color={props.color} />
      <Text>{props.focused ? props.route.name : null}</Text>
    </HStack>
  )
}

export default Tab

