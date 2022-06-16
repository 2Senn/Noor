import { Feather, Ionicons } from "@expo/vector-icons"
import { Icon, Text, View, VStack } from "native-base"
import { TouchableOpacity, useWindowDimensions } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"


export const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
}

interface Props {
  top: any,
  dimensions: any,
}

export const About = (props: Props) => {

  const style = useAnimatedStyle(() => {
    return (
      {
        top: withSpring(props.top.value, SPRING_CONFIG),
      }
    )
  })


  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.startTop = props.top.value
    },
    onActive(event, context) {
      props.top.value = context.startTop + event.translationY
    },
    onEnd() {
      // Dismissing snap point
      if (props.top.value > props.dimensions.height / 3 + 200) {
        props.top.value = props.dimensions.height
      } else {
        props.top.value = props.dimensions.height / 3
      }
    }
  })

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[{
          position: "absolute",
          zIndex: 2,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          padding: 5,
        }, style]}
      >
        <View w="100%" h="10%" p={5} alignItems="center" justifyContent="center">
          <Icon as={Feather} name="chevron-down" size="2xl" color="rgba(0,0,0,0.5)" />
        </View>
        <VStack w="100%" h="80%" p={2}>
          <Text>About</Text>
        </VStack>
      </Animated.View>
    </PanGestureHandler>
  )
}

export default About
