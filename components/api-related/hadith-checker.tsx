import React, { useCallback, useEffect, useState } from "react";
import shortid from "shortid";

interface Props {
  search: any,
  url: string,
}

export const hadiths = (props: Props) => {


  const [hadithJSON, setHadithJSON] = useState<any>([])

  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${props.search}`


  const getHadith = useCallback(async () => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      setHadithJSON(json)
    } catch (error) {
      console.log(error)
    }
  }, [props.search])



  useEffect(() => {
    getHadith()
  }, [getHadith])



  //islamic icons created by Freepik - Flaticon

  const data = [
    {
      key: shortid.generate(),
      hadiths: hadithJSON[0],
      image: require('../../src/images/man.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[1],
      image: require('../../src/images/woman.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[2],
      image: require('../../src/images/arab.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[3],
      image: require('../../src/images/arab2.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[4],
      image: require('../../src/images/united-arab-emirates.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[5],
      image: require('../../src/images/arab-man.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[6],
      image: require('../../src/images/muslim.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[7],
      image: require('../../src/images/dates.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[8],
      image: require('../../src/images/window.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[9],
      image: require('../../src/images/prayer.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[10],
      image: require('../../src/images/lantern.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[11],
      image: require('../../src/images/kaaba.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[12],
      image: require('../../src/images/dates.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[13],
      image: require('../../src/images/carpet.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[14],
      image: require('../../src/images/tayammum.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[15],
      image: require('../../src/images/man.png')
    },
  ]

  return (
    data
  )
}



