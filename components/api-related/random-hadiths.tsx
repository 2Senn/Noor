import React, { useCallback, useEffect, useState } from "react";
import { View, Text, VStack } from 'native-base'
import { StyleSheet } from "react-native";
import LoadingIndicator from "../loading-indicator";

const RandomHadith = () => {

  const [collection, setCollection] = useState([])
  const [hadiths, setHadiths] = useState<any>([])
  const [chapter, setChapter] = useState(1)
  const [book, setBook] = useState(1)
  const [loaded, setLoaded] = useState(false)

  const default_narrator = "وعن أمير المؤمنين أبي حفص عمر بن الخطاب بن نفيل بن عبد العزى بن رياح بن عبد الله بن قرط بن رزاح بن عدي بن كعب بن لؤي بن غالب القرشي العدوي رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول:"
  const default_hadith = "(إنما الأعمال بالنيات، وإنما لكل امرىء ما نوى، فمن كانت هجرته إلى الله ورسوله، فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها، أو امرأة ينكحها، فهجرته إلى ما هاجر إليه). متفق على صحته. رواه إماما المحدثين، أبو عبد الله محمد بن إسماعيل بن إبراهيم بن المغيرة بن بردزبه الجعفي البخاري، وأبو الحسين مسلم بن الحجاج بن مسلم القشيري النيسابوري رضي الله عنهما في صحيحيهما اللذين هما أصح الكتب المصنفة"

  //Random functions
  function randomBook() {
    let result = Math.floor(Math.random() * 3)
    if (result == 0) { result = 1 }
    return result
  }
  function randomChapter() {
    let result = Math.floor(Math.random() * 16)
    if (result == 0) { result = 1 }
    return result
  }
  function randomHadith() {
    return Math.floor(Math.random() * hadiths.length)
  }

  useEffect(() => {
    setChapter(randomChapter())
    setBook(randomBook())
  }, [])

  const url = `https://ahadith-api.herokuapp.com/api/ahadith/${book}/${chapter}/ar-notashkeel`

  const fetchHadith = useCallback(async () => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      setCollection(json)
      setHadiths(json.Chapter[Math.floor(Math.random() * json.Chapter.length - 1)])
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchHadith()
    setLoaded(true)
  }, [fetchHadith])

  if (!loaded) {
    return <LoadingIndicator size={50} />
  }

  return (
    <VStack space={4} alignItems="center">
      <Text style={styles.text} textAlign={"right"}>{hadiths ? hadiths.Ar_Sanad_Without_Tashkeel : default_narrator}</Text>
      <Text style={styles.text} textAlign={"right"}>{hadiths ? hadiths.Ar_Text_Without_Tashkeel : default_hadith}</Text>
    </VStack>

  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 24,
    padding: 5,
    lineHeight: 30,

  }
})

export default RandomHadith
