import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFavoriteProducts, useProduct, useUserLogin } from '../../context/Favorite.context'
import { Iconify } from 'react-native-iconify'
import { COLORS, SIZES } from '../../constants/theme';
// import {} from 'firebase/app'
export default function MylistingUser_screen({ navigation }) {
  const { listProduct, setListProduct } = useProduct()
  const { userLogin, setUserLogin } = useUserLogin()

  let myList = []
  const loadList = ()=>{
    myList = listProduct.filter((item, i) => {
      return userLogin.id == item.idUser
    })
  }
  loadList()
  useEffect(() => {
    loadList()
    // setMyList([...list])
  }, [listProduct, useUserLogin.id])


  const remove = (id) => {
    // console.log(id);
    const find = listProduct.findIndex((item) => item.id == id)
    if (find == -1) {
      return;
    } else {
      const lits = listProduct.filter(
        (item, i) => i !== find
      );
      setListProduct([...lits])
    }
  }

  const showItem = (key) => {
    const vt = myList.findIndex(item => item.id == key)
    if (vt != -1) {
      navigation.navigate('product', { data: myList[vt] })
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



  const renderFavoriteItem = () => {
    if (myList.length == 0) {
      return (
        <Text style={{ textAlign: 'center' }}>Empty list</Text>
      )
    } else {
      return (
        myList.map((item, i) => {
          return (
            <TouchableOpacity key={item.id} style={{ width: '100%', height: 150, paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#F0F0F0', borderBottomWidth: 1 }} onPress={() => { showItem(item.id) }}>
              <Image source={item.img[0]} style={{ objectFit: 'cover', height: 100, width: 100, borderRadius: 10 }} />
              <View style={{ width: '60%' }}>
                <Text>{item.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>${item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => { remove(item.id) }}>
                <Iconify icon='typcn:delete-outline' size={30} color={COLORS.royalBlue} />
              </TouchableOpacity>
            </TouchableOpacity>
          )
        })
      )
    }
  }



  return (


    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={[st.titleHeader, { width: '100%', height: '10%' }]}>
        <Text style={[st.text]}>My Listings</Text>
      </View>
      <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          {renderFavoriteItem()}
        </ScrollView>

      </View>
    </View>
  )
}

const st = StyleSheet.create({
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // marginTop: 20,
    // height: 40
  },
  text: { textAlign: 'center', fontSize: SIZES.h4, color: 'black', fontWeight: '700' },
})