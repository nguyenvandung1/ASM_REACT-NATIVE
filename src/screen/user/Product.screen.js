import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import { Dots } from 'react-native-dots'
import { Iconify } from 'react-native-iconify'

export default function Product_screen({ route, navigation }) {
  const product = route.params.data
  // console.log(product);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const newIndex = Math.floor(contentOffset.x / SIZES.width);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      console.log(currentIndex);
    }
  };



  return (
    <View style={{ flex: 1, }}>
      <View style={{ width: SIZES.width, height: 450, position: 'relative', alignItems: 'center' }}>
        <FlatList
          data={product.img}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ width: SIZES.width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
                <Image source={item} style={{ objectFit: 'cover', width: SIZES.width, height: 450 }} />
              </View>
            )
          }}
          onScroll={onScroll}
        />
        {/* <Dots
          data={product.img}
          dotActiveStyle={[st.dostActive]}
          currentIndex={currentIndex}
          dotStyle={[]}
        /> */}
        <View style={{ position: 'absolute', bottom: 5, flexDirection: 'row' }}>
          {product.img.map((item, i) => {
            return (
              <View style={[{ width: 5, height: 5, marginHorizontal: 5, borderRadius: 10 }, i == currentIndex ? { backgroundColor: 'red', width: 10 } : { backgroundColor: 'black' }]} key={i}>

              </View>
            )
          })}
        </View>

        {/*  */}
        <TouchableOpacity style={{ position: 'absolute', top: 35, left: 25, backgroundColor: 'white', zIndex: 99, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingStart: 5 }} onPress={()=>{navigation.goBack()}}>
          <Iconify icon='fluent:ios-arrow-24-filled' size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      <View>

      </View>

    </View>
  )
}

const st = StyleSheet.create({
  red: {
    backgroundColor: 'rgba(100, 100, 100, 0.1)',
  },
  white: {
    backgroundColor: 'white'
  },
  dostActive: {
    color: 'red',
    width: 10,
    height: 5

  },
  dots: {
    color: 'black',
    width: 5,
    height: 5
  }

})