import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import {data_slide} from '../../data/index.data'
import {SIZES} from '../../constants/theme'

export default function Onboarding_screen({ navigation }) {

  const {showPage, setShowPage} = useState(false);
  // if(!showPage){
  //   return(
  //     <AppIntroSlider
  //       data={data_slide}
  //       renderItem={(item)=>{
  //         <View>
  //           <Image source={item.img} style={{width: SIZES.width-80, height: 400}} resizeMode='contain'/>
  //           <Text>{item.title}</Text>
  //           <Text>{item.description}</Text>
  //         </View>
  //       }}

  //     />
  //   )
  // }
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(225, 225, 225)' }]}>
      <Text onPress={() => { navigation.navigate('singin') }}>onboarding_screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})