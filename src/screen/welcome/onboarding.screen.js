import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { data_slide } from '../../data/index.data'
import { COLORS, SIZES } from '../../constants/theme'
import { st_onboar } from './onboarding.style';
export default function Onboarding_screen({ navigation }) {

  const [showPage, setShowPage] = useState(false);

  // button
  const buttonNext = (lable) => {
    return (
      <View style={[{ justifyContent: 'center', alignItems: 'center', padding: 12 }]}>
        <Text style={{ color: COLORS.title, fontSize: SIZES.h4, fontWeight: '600' }}>
          {lable}
        </Text>
      </View>
    )
  }

  const buttonSkip = (skip) => {
    return (
      <View style={[{ justifyContent: 'center', alignItems: 'center', padding: 12 }]}>
      <Text style={{ color: COLORS.title, fontSize: SIZES.h4, fontWeight: '600' }}>
        {skip}
      </Text>
    </View>
    )
  }

  const buttonDone = (done) =>{
    return (
      <View style={[{ justifyContent: 'center', alignItems: 'center', padding: 12 }]}>
      <Text style={{ color: COLORS.title, fontSize: SIZES.h4, fontWeight: '600' }}>
        {done}
      </Text>
    </View>
    )
  }


  // const renderSlider = ()=> {
  return (
    <AppIntroSlider
      data={data_slide}
      renderItem={({ item }) => {
        return (
          <View style={{ flex: 1, justifyContent: 'center', padding: 15, paddingTop: 100, alignItems: 'center' }}>
            <Image source={item.img} style={{ width: SIZES.width - 80, height: 400, objectFit: 'contain' }} resizeMode='contain' />
            <Text style={[st_onboar.title]}>{item.title}</Text>
            <Text style={[st_onboar.content]}>{item.description}</Text>
          </View>
        )
      }}
      activeDotStyle={{ backgroundColor: COLORS.primary, width: 30 }}
      showSkipButton={true}
      renderNextButton={() => buttonNext("Next")}
      renderSkipButton={() => buttonSkip("Skip")}
      renderDoneButton={()=> buttonDone("Done") }
      onDone={()=>{navigation.navigate('splash')}}
    />
  )
  // }
  return (
    <View style={[{ flex: 1, }]}>
      {!showPage && renderSlider()}
    </View>
  )
}

const styles = StyleSheet.create({})