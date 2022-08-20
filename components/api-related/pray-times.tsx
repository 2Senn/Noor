import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";


const Prayers = (method: number, city: string, country: string) => {

  const [prayers, setPrayers] = useState<any>([])
  const [loading, setLoading] = useState(true)

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`

  useEffect(() => {
    async function fetchPrayers() {
      const request = await axios.get(url)
      setPrayers(request.data.data.timings)
      setLoading(false)
    }
    fetchPrayers()
  }, [url])

  const times = {
    Fajr: prayers.Fajr,
    Sunrise: prayers.Sunrise,
    Dhuhr: prayers.Dhuhr,
    Asr: prayers.Asr,
    Maghrib: prayers.Maghrib,
    Isha: prayers.Isha,
  }


  if (!loading) {
    console.log(prayers)
    return prayers
  }
}

export default Prayers
