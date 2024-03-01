import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFavoriteProducts, useProduct, useUserLogin } from '../../context/Favorite.context'
import { Iconify } from 'react-native-iconify'
import { COLORS, SIZES } from '../../constants/theme';
import { dataItemHome } from '../../data/ItemHome.data';
import { deleteProductFavorite, getListFavorite } from '../../../db/script/API_APP';



export default function FavoriteUser_screen({ navigation }) {

  const { favoriteProducts, setFavoriteProducts } = useFavoriteProducts();
  const [listIdFavorite, setListIdFavorite] = useState([]);
  const { userLogin, setUserLogin } = useUserLogin();
  const { listProduct, setListProduct } = useProduct();
  const [loading, setLoading] = useState(false);
  const getList = async () => {
    // setLoading(true)
    try {
      const response = await getListFavorite(userLogin.id);
      const updatedListIdFavorite = [...response];
      setListIdFavorite(updatedListIdFavorite);

      const listID = updatedListIdFavorite.map((item) => item.idProduct);
      const listFavorite = listProduct.filter((item) => listID.includes(item.id));
      setFavoriteProducts([...listFavorite]);
    } catch (error) {
      console.log("lỗi: " + error);
    } finally {
      setLoading(false);
    }
  };




  // 



  useEffect(() => {
    getList();
  }, [userLogin]); // Re-run when userLogin changes

  const remove = async (id) => {
    // console.log(id);
    const find = listIdFavorite.findIndex((item) => item.idProduct == id)
    if (find == -1) {
      return;
    } else {
      try {
        const response = await deleteProductFavorite(listIdFavorite[find].id);
        console.log("remove");
        getList();

      } catch (error) {
        console.log("Lỗi khi xóa sản phẩm yêu thích: " + error);
      }
    }
  }
  // 
  const showItem = (key) => {
    // const vt = dataItemHome.findIndex(item => item.id == key)
    // if (vt != -1) {
    navigation.navigate('product', { data: listProduct[key] })
    // } else {
    //   Alert.alert(
    //     'Error',
    //     'Product default',
    //     [
    //       { text: 'Cancel', onPress: () => console.log('Cancel pressed') },
    //       { text: 'OK', onPress: () => console.log('OK pressed') },
    //     ],
    //     { cancelable: false } // Optional: disable alert dismissal by tapping outside
    //   );
    // }
  }



  const renderFavoriteItem = () => {
    if (favoriteProducts.length == 0) {
      return (
        <Text style={{ textAlign: 'center' }}>List favorite is null</Text>
      )
    } else {
      return (
        favoriteProducts.map((item, i) => {
          return (
            <TouchableOpacity key={item.id} style={{ width: '100%', height: 150, paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#F0F0F0', borderBottomWidth: 1 }} onPress={() => { showItem(i) }}>
              <Image source={{ uri: item.img[0] }} style={{ objectFit: 'cover', height: 100, width: 100, borderRadius: 10 }} />
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


  const [startLoad, setStartLoad] = useState(false)
  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    // console.log(contentOffset);
    if (contentOffset.y < -5) {

      if (!loading) {
        setLoading(true)
        setStartLoad(true);
      }
    }
    // contentOffset: Vị trí hiện tại của scroll
    // contentSize: Kích thước tổng của nội dung
    // layoutMeasurement: Kích thước của khu vực cuộn
  }
  const handleEndScroll = () => {
    if (startLoad) {
      getList();
      setStartLoad(false);
    }
  }



  return (


    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={[st.titleHeader, { width: '100%', height: '10%' }]}>
        <Text style={[st.text]}>Find All You Need</Text>
      </View>
      <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
        <ScrollView style={{ width: '100%', height: '100%' }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onScrollEndDrag={handleEndScroll}
        >
          {/* {setLoading && renderFavoriteItem()} */}
          {loading ? (
            <ActivityIndicator color={"red"} size={'large'} />
          ) : renderFavoriteItem()}
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