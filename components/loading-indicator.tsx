import React from "react"
import LottieView from 'lottie-react-native'

export const LoadingIndicator = ({ size }: { size: number }) => {
  return (
    <LottieView
      source={require('../src/lottie/red-sun.json')}
      autoPlay
      loop
      style={{ width: size, height: size }} />
  )
}

export default LoadingIndicator

