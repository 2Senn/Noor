import React, { useCallback, useEffect, useState } from "react";


const Prayers = (method: string, city: string, country: string) => {
  const [prayers, setPrayers] = useState<any>([])

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`
  const fetchPrayers = useCallback(async () => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      setPrayers(json)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchPrayers()
  }, [fetchPrayers])

  return prayers
}

export default Prayers
