import React, { useCallback, useEffect, useState } from "react";

export const Time = () => {

  const [time, setTime] = useState("")


  function givePadding(hour: number, sec: number, min: number) {
    let padHour = hour.toString()
    let padMin = min.toString()
    let padSec = sec.toString()
    if (hour < 10) { padHour = "0" + hour.toString() }
    if (min < 10) { padMin = "0" + min.toString() }
    if (sec < 10) { padSec = "0" + sec.toString() }

    return padHour + ":" + padMin + ":" + padSec

  }

  useEffect(() => {
    var hour = new Date().getHours()
    var min = new Date().getMinutes()
    var sec = new Date().getSeconds()

    setTime(givePadding(hour, sec, min))
  }, [])

  return (
    time
  )
}

export default Time
