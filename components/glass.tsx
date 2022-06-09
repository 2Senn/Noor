import React from "react"
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet } from "react-native"
import { View } from "native-base"


export const Glass = () => {

  return (
    <View borderRadius={25} flex={1}>
      <LinearGradient
        colors={['rgba(255,255,255,0.2)']}
        start={[0, 1]}
        end={[1, 1]}
        style={styles.glass}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  glass: {
    width: "100%",
    height: "100%",
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    borderWidth: 2,
  }
})

export default Glass
