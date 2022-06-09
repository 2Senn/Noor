import React from "react"
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"
import { View } from "native-base"
import { StyleSheet } from "react-native"


export const Glass = () => {

  return (
    <BlurView tint={"default"} intensity={40} style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)']}
        start={[0, 1]}
        end={[1, 1]}
        style={styles.glass}
      />
    </BlurView>
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
