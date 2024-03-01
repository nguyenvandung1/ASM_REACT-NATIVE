import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import { Dots } from 'react-native-dots'
import { Iconify } from 'react-native-iconify'
import { ButtonCustomer } from '../../components';
import { useFavoriteProducts, useUserLogin } from '../../context/Favorite.context';
import { addProductFavorite, deleteProductFavorite, getListFavorite } from '../../../db/script/API_APP';



export default function Product_screen({ route, navigation }) {
  const product = route.params.data
  const { userLogin, setUserLogin } = useUserLogin();
  const { favoriteProducts, setFavoriteProducts } = useFavoriteProducts();
  const [listIdFavorite, setListIdFavorite] = useState([]);
  const [favorite, setFavorite] = useState();

  const findProduct = () => {
    const find = listIdFavorite.findIndex((item) => item.idProduct === product.id && item.uid === userLogin.id);
    const check = find !== -1;
    const kq = {
      check: check,
      vt: find
    }
    // console.log(listIdFavorite);
    // console.log("\nProductID: " + product.id + "\nUserID: " + userLogin.id);
    // console.log("Tìm thấy không: " + check);
    return kq;
  }
  const getList = async () => {
    try {
      const response = await getListFavorite(userLogin.id);
      setListIdFavorite([...response]);
      const kq = findProduct();

      setFavorite(kq.check)
    } catch (error) {
      console.log("lỗi: " + error);
    }
  };
  useEffect(() => {
    
    getList();
  }, []);



  useEffect(() => {
    const kq = findProduct();
    setFavorite(kq.check);
  }, [listIdFavorite])

  const deleteAndAddProduct = async () => {
    const findVT = findProduct();
    const productFavoriteNew = {
      idProduct: product.id,
      uid: userLogin.id
    }
    if (listIdFavorite.length === 0) {
      try {
        await addProductFavorite(productFavoriteNew);
      } catch (error) {
        console.log(error);
      }
    } else if (!findVT.check) {
      try {
        const response = await addProductFavorite(productFavoriteNew);
        getList();
      } catch (error) {
        console.log("Lỗi add: "+ error);
      }
    } else {
      try {
        const response = await deleteProductFavorite(listIdFavorite[findVT.vt].id);
        console.log(listIdFavorite[findVT.vt].id);
        console.log(response);
        getList();
      } catch (error) {
        console.log("Lỗi delete: "+error);
      }
    }
  }




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



  const renderImg = (img) => {
    if (typeof img === 'string') {
      return <Image source={{ uri: img }} style={{ objectFit: 'cover', width: SIZES.width, height: 450 }} />
    } else {
      return (
        <Image source={img} style={{ objectFit: 'cover', width: SIZES.width, height: 450 }} />
      )
    }
  }

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
                {renderImg(item)}
              </View>
            )
          }}
          onScroll={onScroll}
        />

        <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row' }}>
          {product.img.map((item, i) => {
            return (
              <View style={[{ width: 10, height: 10, marginHorizontal: 5, borderRadius: 10, backgroundColor: 'white' }, i == currentIndex ? { backgroundColor: '#f52d56', width: 25 } : { backgroundColor: 'rgb(102, 102, 102)' }]} key={i}>

              </View>
            )
          })}
        </View>

        {/*  */}
        <TouchableOpacity style={{ position: 'absolute', top: 35, left: 25, backgroundColor: 'white', zIndex: 99, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingStart: 5 }} onPress={() => { navigation.goBack() }}>
          <Iconify icon='fluent:ios-arrow-24-filled' size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute', bottom: 0, height: SIZES.height - 400, width: '100%', backgroundColor: 'black', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: 'white', paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: '500', }}>{product.title}</Text>
        <Text style={{ marginVertical: 10, fontSize: 30, fontWeight: 'bold' }}>${product.price}</Text>
        <View style={{ height: 150 }}>
          <ScrollView>
            <Text style={{ lineHeight: 25, textAlign: 'justify' }}>
              {product.detail}
            </Text>
          </ScrollView>
        </View>

        <View style={{ position: 'absolute', bottom: 15, width: '100%', height: 60, left: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <ButtonCustomer bg={'#F0F0F0'} w={20} h={100} setIcon={true} >
            <Iconify icon={"iconamoon:bookmark-fill"} size={20} color={'black'} />
          </ButtonCustomer> */}
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '20%', backgroundColor: '#F0F0F0', borderRadius: 8 }}
            onPress={() => { deleteAndAddProduct() }}

          >
            <Iconify icon={"iconamoon:bookmark-fill"} size={30} color={favorite ? COLORS.royalBlue : 'black'} />
          </TouchableOpacity>
          <ButtonCustomer bg={'#4F63AC'} w={70} h={100} lable={'Contact Seller'} color={'white'} />
        </View>

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
    color: 'white',
    width: 5,
    height: 5
  }

})