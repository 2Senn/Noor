import { HStack, Text, View } from "native-base"
import Time from "./api-related/current-time"
import Hijri from "./api-related/hijri"

export const DateAndTime = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between" >
      <View>
        <Text>{Hijri()}</Text>
      </View>
      <View>
        <Text>{Time()}</Text>
      </View>
    </HStack>
  )
}

export default DateAndTime
