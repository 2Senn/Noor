import React, { useCallback, useEffect, useRef, useState } from "react"
import LoadingIndicator from "../loading-indicator"

export const Hijri = () => {

  const [date, setDate] = useState('')
  const [hijriDate, setHijriDate] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    var year = new Date().getFullYear()
    var month = new Date().getMonth() + 1
    var day = new Date().getDate()

    setDate(
      day + "-" + month + "-" + year
    )
  }, [])

  const url = `https://api.aladhan.com/v1/gToH?date=${date}`

  const fetchHijri = async () => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      setHijriDate(json.data.hijri.date)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchHijri()
  }, [fetchHijri])

  
  return(
    loading ? <LoadingIndicator size={50} /> : hijriDate 
  )

}

export default Hijri

