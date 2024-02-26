import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Iconify } from 'react-native-iconify'
import * as ImagePicker from 'expo-image-picker'
import ButtonCustomer from '../../components/button.components'
// import { Dropdown } from 'react-native-element-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import { useProduct, useUserLogin } from '../../context/Favorite.context'


export default function CreateItemUser_screen({ navigation }) {
    const {userLogin, setUserLogin} = useUserLogin()
    const { listProduct, setListProduct } = useProduct()

    const [image, setImage] = useState([]);
    const [focusCategory, setFocusCategory] = useState(false)
    const [category, setCategory] = useState('');
    

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (!result.canceled) {
            // setImage(result.uri);
            // console.log(result.uri);
            setImage([...image,  result.uri])
            console.log(image);

        }
    };

    const deleteIMG = (i) => {
        const updatedImages = image.filter((_, index) => index !== i);
        setImage(updatedImages);
    };

    const listCategory = [
        { key: '1', value: 'Popular' },
        { key: '2', value: 'Chair' },
        { key: '3', value: 'Table' },
        { key: '4', value: 'Armchair' },
        { key: '5', value: 'Bed' },
        { key: '6', value: 'Lamb' },
    ]

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const addProduct = ()=>{
        let id;
        if(listProduct.length == 0){id = 0} else{ id = listProduct[listProduct.length-1].id+1}


        
        const productNew = {   
            idUser: userLogin.id,
            id: id,
            title: title,
            price: parseInt(price),
            img: image,
            quantity: 1,
            type: category.value,
            detail: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. '
        }

        setListProduct([...listProduct, productNew])
        console.log(productNew);
    }

    return (
        <View style={[st.container]}>
            <View style={[st.header]}>
                <Text style={[st.text_header]}>Create a new listing</Text>
                <TouchableOpacity style={[st.btnBack]} onPress={() => { navigation.goBack() }}>
                    <Iconify icon='fluent:ios-arrow-24-filled' size={24} color={'#4F63AC'} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '90%', flexDirection: 'row', height: '15%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 90, height: 90, borderColor: '#909191', borderWidth: 1, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginEnd: 20 }} onPress={() => { handlePickImage() }}>
                    <Iconify icon='subway:add' color={'#DADADA'} size={25} />
                </TouchableOpacity>
                <View style={{ width: (SIZES.width * 0.9) - 110, height: 90, zIndex: 99 }}>
                    <ScrollView style={{ width: '100%', height: 90 }} horizontal={true}>
                        {
                            image.map((img, i) => {
                                return (
                                    <View style={{ width: 90, height: 90, marginEnd: 10, zIndex: 99 }} key={i} >
                                        <Image source={{uri : img }} style={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 8 }} />
                                        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, zIndex: 99 }} onPress={() => { deleteIMG(i) }}>
                                            <Iconify icon='clarity:remove-solid' color={'black'} size={25} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>

            <View style={{ width: '90%', height: '74%', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '100%', height: 85, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Title</Text>
                    <View style={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
                        <TextInput placeholder='Listing Title' value={title} onChangeText={setTitle}/>
                    </View>
                </View>

                <View style={{ width: '100%', height: 85, justifyContent: 'space-between', zIndex: 99 }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Category</Text>


                    <SelectList
                        setSelected={(val) => setCategory(val)}
                        data={listCategory}
                        // save={value}
                        dropdownStyles={{ backgroundColor: 'white' }}
                        boxStyles={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, paddingHorizontal: 10, alignItems: 'center' }}
                        placeholder='Select category'

                    />
                </View>

                <View style={{ width: '100%', height: 85, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Price</Text>
                    <View style={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
                        <TextInput placeholder='Enter price in USD' keyboardType='number-pad' value={price} onChangeText={setPrice}/>
                    </View>
                </View>

                <View style={{ width: '100%', height: 162, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Description</Text>
                    <View style={{ width: '100%', height: 136, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, paddingHorizontal: 10 }}>
                        <TextInput placeholder='Tell us more...' style={{ width: '100%', height: '100%' }} value={description} onChangeText={setDescription}/>
                    </View>
                </View>

                <ButtonCustomer w={100} h={10} bg={COLORS.royalBlue} lable={'Submit'} color={'white'} onPress={()=>{addProduct()}} />



            </View>

        </View>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '90%',
        height: '10%',
        justifyContent: 'center'
    },
    text_header: { textAlign: 'center', fontSize: SIZES.h4, color: 'black', fontWeight: '700' },

    btnBack: {
        position: 'absolute',

    }
})