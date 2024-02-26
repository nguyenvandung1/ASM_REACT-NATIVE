import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Header_components } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import { Iconify } from 'react-native-iconify'
// import Icon from 'react-native-vector-icons/Fontisto'

import { menuData } from '../../data/index.data'
import { dataItemHome } from '../../data/ItemHome.data'
import { useProduct } from '../../context/Favorite.context'



export default function HomeUser_Screen({ navigation }) {
  const {listProduct, setListProduct} = useProduct()
  const [showSearch, setShowSearch] = useState(false)
  const renderSearch = () => {
    if (showSearch) {
      return (
        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', borderColor: COLORS.royalBlue, borderWidth: 1, borderRadius: 8 }}>
          <TextInput placeholder='Find product' style={{ width: '90%', fontSize: SIZES.h4, fontWeight: '700' }} />
        </View>
      )
    } else {
      return (
        <View style={[st.titleHeader, { width: '60%' }]}>
          <Text style={[st.text]}>Find All You Need</Text>
        </View>
      )
    }
  }

  const [menuFocused, setMenuFocused] = useState(1);

  const setFocused = (id) => {
    setMenuFocused(id)
  }

  const renderItemMenu = ({ item }) => {
    const { title, icon, iconFocused, id } = item;
    if (id == 1) {
      return (
        <TouchableOpacity style={{ width: 70, height: 95, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onPress={() => { setFocused(id) }} >
          <View style={[{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 10 }, menuFocused == id ? st.bgFocused : st.bgUnfocused]}>
            {menuFocused == 1 ? <Iconify icon={'typcn:star'} size={40} color={'white'} /> : <Iconify icon={'system-uicons:star'} size={40} color={'#909090'} />}
          </View>
          <Text style={[{ textAlign: 'center', fontSize: SIZES.h5, fontWeight: '600', marginTop: 15, color: 'rgba(153, 153, 153, 1)' }, menuFocused == id ? st.colorUFC : st.colorFC]}>Popular</Text>
        </TouchableOpacity>
      )
    } else if (id == 2) {
      return (
        <TouchableOpacity style={{ width: 70, height: 95, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginEnd: 20 }} onPress={() => { setFocused(id) }} >
          <View style={[{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 10 }, menuFocused == id ? st.bgFocused : st.bgUnfocused]}>
            {menuFocused == 2 ? <Iconify icon={'ph:chair-fill'} size={40} color={'white'} /> : <Iconify icon={'ph:chair-light'} size={40} color={'#909090'} />}
          </View>
          <Text style={[{ textAlign: 'center', fontSize: SIZES.h5, fontWeight: '600', marginTop: 15, color: 'rgba(153, 153, 153, 1)' }, menuFocused == id ? st.colorUFC : st.colorFC]}>Chair</Text>
        </TouchableOpacity>
      )
    } else if (id == 3) {
      return (
        <TouchableOpacity style={{ width: 70, height: 95, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginEnd: 20 }} onPress={() => { setFocused(id) }} >
          <View style={[{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 10 }, menuFocused == id ? st.bgFocused : st.bgUnfocused]}>
            {menuFocused == 3 ? <Iconify icon={'mdi:table-furniture'} size={40} color={'white'} /> : <Iconify icon={'iconoir:home-table'} size={40} color={'#909090'} />}
          </View>
          <Text style={[{ textAlign: 'center', fontSize: SIZES.h5, fontWeight: '600', marginTop: 15, color: 'rgba(153, 153, 153, 1)' }, menuFocused == id ? st.colorUFC : st.colorFC]}>Table</Text>
        </TouchableOpacity>
      )
    } else if (id == 4) {
      return (
        <TouchableOpacity style={{ width: 70, height: 95, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginEnd: 20 }} onPress={() => { setFocused(id) }} >
          <View style={[{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 10 }, menuFocused == id ? st.bgFocused : st.bgUnfocused]}>
            {menuFocused == 4 ? <Iconify icon={'solar:armchair-2-bold-duotone'} size={40} color={'white'} /> : <Iconify icon={'solar:armchair-2-line-duotone'} size={40} color={'#909090'} />}
          </View>
          <Text style={[{ textAlign: 'center', fontSize: SIZES.h5, fontWeight: '600', marginTop: 15, color: 'rgba(153, 153, 153, 1)' }, menuFocused == id ? st.colorUFC : st.colorFC]}>Armchair</Text>
        </TouchableOpacity>
      )
    } else if (id == 5) {
      return (
        <TouchableOpacity style={{ width: 70, height: 95, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginEnd: 20 }} onPress={() => { setFocused(id) }} >
          <View style={[{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 10 }, menuFocused == id ? st.bgFocused : st.bgUnfocused]}>
            {menuFocused == 5 ? <Iconify icon={'ion:bed'} size={40} color={'white'} /> : <Iconify icon={'ion:bed-outline'} size={40} color={'#909090'} />}
          </View>
          <Text style={[{ textAlign: 'center', fontSize: SIZES.h5, fontWeight: '600', marginTop: 15, color: 'rgba(153, 153, 153, 1)' }, menuFocused == id ? st.colorUFC : st.colorFC]}>Bed</Text>
        </TouchableOpacity>
      )
    } else if (id == 6) {
      return (
        <TouchableOpacity style={{ width: 70, height: 95, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginEnd: 20 }} onPress={() => { setFocused(id) }} >
          <View style={[{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 10 }, menuFocused == id ? st.bgFocused : st.bgUnfocused]}>
            {menuFocused == 6 ? <Iconify icon={'mingcute:desk-lamp-2-fill'} size={40} color={'white'} /> : <Iconify icon={'mingcute:desk-lamp-2-line'} size={40} color={'#909090'} />}
          </View>
          <Text style={[{ textAlign: 'center', fontSize: SIZES.h5, fontWeight: '600', marginTop: 15, color: 'rgba(153, 153, 153, 1)' }, menuFocused == id ? st.colorUFC : st.colorFC]}>Lamb</Text>
        </TouchableOpacity>
      )
    }
  }

  const showItem = (key) => {
    const vt = listProduct.findIndex(item => item.id == key)
    if (vt != -1) {
      navigation.navigate('product', { data: listProduct[vt] })
    } else {
      Alert.alert(
        'Error',
        'Product default',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel pressed') },
          { text: 'OK', onPress: () => console.log('OK pressed') },
        ],
        { cancelable: false } // Optional: disable alert dismissal by tapping outside
      );
    }
  }


  


  return (
    <View style={[st.container]}>
      <View style={[st.header]}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: '', width: '20%' }} onPress={() => { setShowSearch(!showSearch) }}>
            <Iconify icon='ic:baseline-search' size={40} color={COLORS.royalBlue} />
          </TouchableOpacity>
          {renderSearch()}
        </View>
      </View>

      <View style={[st.menu_container]}>
        <FlatList
          data={menuData}
          horizontal={true}
          renderItem={renderItemMenu}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ width: '100%', height: '75%', justifyContent: 'center', alignContent: 'space-between' }}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {listProduct.map((item, i) => {
              return (
                <TouchableOpacity style={{ width: '45%', marginVertical: 15, height: 260, backgroundColor: 'white', justifyContent: 'flex-end' }} key={item.id} onPress={() => { showItem(item.id) }}>
                  {renderImg(item.img[0])}
                  <Text style={{ marginVertical: 5, color: '#606060' }}>{item.title}</Text>
                  <Text style={{ fontWeight: 'bold' }}>$ {item.price}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>

      </View>


    </View>
  )
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    height: '10%'
    // alignItems: 'center'
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // marginTop: 20,
    // height: 40
  },
  text: { textAlign: 'center', fontSize: SIZES.h4, color: 'black', fontWeight: '700' },

  bgFocused: {
    backgroundColor: 'black'
  },
  bgUnfocused: {},

  colorFC: {
    color: 'rgba(153, 153, 153, 1)'
  },
  colorUFC: {
    color: COLORS.royalBlue,
  },

  menu_container: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f2f2f2'
  },
});const renderImg = (img)=>{
    if(typeof img === 'string'){
      return <Image source={{uri: img}} style={{ width: '100%', borderRadius: 10, objectFit: 'contain', height: 210, backgroundColor: 'white', shadowColor: '#606060' }} />
    } else{
      return (
        <Image source={img} style={{ width: '100%', borderRadius: 10, objectFit: 'contain', height: 210, backgroundColor: 'white', shadowColor: '#606060' }} />
      )
    }
  }