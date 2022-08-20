import React from 'react'
import Time from './api-related/current-time'


export function CompareTime(current: any, t1: any, t2: any, t3:any, t4:any, t5:any, t6:any) {
  
  let time = slice(current)
  let fajr = slice(t1)
  let sunrise = slice(t2)
  let dhuhr = slice(t3)
  let asr = slice(t4)
  let maghrib = slice(t5)
  let isha = slice(t6)

  if((parseInt(time) <= parseInt(fajr)) && (parseInt(time) > parseInt(isha))){
    return 0
  }
  else if((parseInt(time) <= parseInt(sunrise)) && (parseInt(time) > parseInt(fajr))){
    return 2
  }
  else if((parseInt(time) <= parseInt(dhuhr)) && (parseInt(time) > parseInt(sunrise))){
    return 2
  }
  else if((parseInt(time) <= parseInt(asr)) && (parseInt(time) > parseInt(dhuhr))){
    return 3
  }
  else if((parseInt(time) <= parseInt(maghrib)) && (parseInt(time) > parseInt(asr))){
    return 4
  }
  else if((parseInt(time) <= parseInt(isha)) && (parseInt(time) > parseInt(maghrib))){
    return 5
  }
  else{
    return 5
  }


}

function slice(x: string){
  return x.replace(':', '')
}

export default CompareTime


