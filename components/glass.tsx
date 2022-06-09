import React from "react"
import { StyleSheet } from "react-native"
import { Box, View } from "native-base"


export const Glass = () => {

  return (
    <View borderRadius={25} flex={1}>
      <Box
        style={styles.glass}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  glass: {
    width: "100%",
    height: "100%",
    borderColor: "#442c2e",
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: '#442C2E'
  }
})

export default Glass
