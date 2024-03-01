import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFavoriteProducts, useProduct, useUserLogin } from '../../context/Favorite.context'
import { Iconify } from 'react-native-iconify'
import { COLORS, SIZES } from '../../constants/theme';
import { deleteProduct } from '../../../db/script/API_APP';
import { Swipeable } from 'react-native-gesture-handler';
// import {} from 'firebase/app'

export default function MylistingUser_screen({ navigation }) {
  const { listProduct, setListProduct } = useProduct()
  const { userLogin, setUserLogin } = useUserLogin()

  let myList = []
  const loadList = () => {
    myList = listProduct.filter((item, i) => {
      return userLogin.id == item.uid
    })
  }
  loadList()
  useEffect(() => {
    loadList()
    // setMyList([...list])
  }, [listProduct, useUserLogin.id])


  const remove = async (id) => {
    // console.log(id);
    const find = listProduct.findIndex((item) => item.id == id)
    try {
      const response = await deleteProduct(id);
      if (find == -1) {
        return;
      } else {
        const lits = listProduct.filter(
          (item, i) => i !== find
        );
        setListProduct([...lits])
      }
    } catch (error) {
      console.log("Lỗi xóa product: " + error);
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





  const RenderMyItems = ({ id, item }) => {

    const right = () => {

      return (
        <View key={id} style={{ width: 200, height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{ width: 70, height: 70, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 3, height: 4 }, shadowRadius: 10, shadowOpacity: 0.5 }}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center', width: "100%", height: "100%",  }}
              onPress={()=>{
                navigation.navigate('update', {"productUpdate": item});
              }}
            >
              <Iconify icon='typcn:edit' color={'black'} size={26} />
            </TouchableOpacity>
          </View>
          <View style={{ width: 70, height: 70, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowRadius: 5, shadowOpacity: 0.5 }}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center', width: "100%", height: "100%" }} onPress={() => { console.log(id); }}>
              <Iconify icon='icon-park-outline:delete-one' color={'red'} size={26} />
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <Swipeable key={item.id} renderRightActions={right} containerStyle={{justifyContent: 'center', alignItems: 'center',  width: '90%', height: 100, borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 3, height: 4 }, shadowRadius: 10, shadowOpacity: 0.5, marginVertical: 25, backgroundColor: '#f2f2f2'}}>
        <TouchableOpacity style={{ width: '90%', height: 100,  flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#F0F0F0', borderBottomWidth: 1, backgroundColor: '#f2f2f2', borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 3, height: 4 }, shadowRadius: 10, shadowOpacity: 0.5 }} onPress={() => { showItem(item.id) }}>
          <Image source={{ uri: item.img[0] }} style={{ objectFit: 'cover', height: 100, width: 100, borderRadius: 10 }} />
          <View style={{ width: '60%' }}>
            <Text>{item.title}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>${item.price}</Text>
          </View>
          {/* <TouchableOpacity onPress={() => { remove(item.id) }}>
            <Iconify icon='typcn:delete-outline' size={30} color={COLORS.royalBlue} />
          </TouchableOpacity> */}
        </TouchableOpacity>
      </Swipeable>
    )
  }



  return (


    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={[st.titleHeader, { width: '100%', height: '10%' }]}>
        <Text style={[st.text]}>My Listings</Text>
      </View>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }}>

          {/* {renderFavoriteItem()} */}
          {myList.length == 0 ? (
            <>
              <Text style={{ textAlign: 'center' }}>Empty list</Text>
            </>
          ) : (myList.map(item => {
            return (
              <RenderMyItems item={item} id={item.id} />
            )
          }))}


        </View>
      </ScrollView>
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