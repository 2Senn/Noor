import React, { useCallback, useEffect, useState } from "react";

export const TimeNumber = () => {

  const [time, setTime] = useState("")


  function givePadding(hour: number, min: number) {
    let padHour = hour.toString()
    let padMin = min.toString()
    if (hour < 10) { padHour = "0" + hour.toString() }
    if (min < 10) { padMin = "0" + min.toString() }

    return padHour + padMin 

  }

  useEffect(() => {
    var hour = new Date().getHours()
    var min = new Date().getMinutes()

    setTime(givePadding(hour, min))
  }, [])

  return (
    time
  )
}

export default TimeNumber
