import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Iconify } from 'react-native-iconify'
import * as ImagePicker from 'expo-image-picker'
import ButtonCustomer from '../../components/button.components'
import { Dropdown } from 'react-native-element-dropdown'


export default function CreateItemUser_screen({ navigation }) {
    const [image, setImage] = useState([]);
    const [focusCategory, setFocusCategory] = useState(false)
    const [category, setCategory] = useState('');

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (!result.canceled) {
            // setImage(result.uri);
            console.log(result.uri);
            setImage([...image, result.uri])
            console.log(image);

        }
    };

    const deleteIMG = (i) => {
        const updatedImages = image.filter((_, index) => index !== i);
        setImage(updatedImages);
    };

    const listCategory = [
        { value: '1', label: 'Mobiles' },
        { value: '2', label: 'Appliances' },
        { value: '3', label: 'Cameras' },
        { value: '4', label: 'Computers' },
        { value: '5', label: 'Vegetables' },
        { value: '6', label: 'Diary Products' },
        { value: '7', label: 'Drinks' },
    ]
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
                <View style={{ width: (SIZES.width * 0.9) - 110, height: 90, zIndex: 999 }}>
                    <ScrollView style={{ width: '100%', height: 90 }} horizontal={true}>
                        {
                            image.map((img, i) => {
                                return (
                                    <View style={{ width: 90, height: 90, marginEnd: 10 }} key={i}>
                                        <Image source={{ uri: img }} style={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 8 }} />
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
                        <TextInput placeholder='Listing Title' />
                    </View>
                </View>

                <View style={{ width: '100%', height: 85, justifyContent: 'space-between', zIndex: 99 }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Category</Text>
                    {/* <SelectList data={category} boxStyles={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1 }} dropdownStyles={{ backgroundColor: 'white' }} placeholder='Select the category' dropdownItemStyles={{ backgroundColor: 'black' }} /> */}
                    {/* <View style={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}> */}

                    <Dropdown data={listCategory}
                        placeholder='Select the category'
                        iconStyle={{ width: 20, height: 20, }} 
                        containerStyle={{width: '50%'}}
                        itemContainerStyle={{}}
                        style={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, paddingHorizontal: 10 }}
                        onFocus={() => { setFocusCategory(true) }}
                        onBlur={() => { setFocusCategory(false) }}
                        value={category}
                        onChange={item => {
                            setCategory(item.value);
                            setFocusCategory(false);
                        }}
                        placeholderStyle={{ color: '#C5C5C5' }}
                        itemTextStyle={{ fontSize: 14, color: 'black' }}
                    />
                </View>

                <View style={{ width: '100%', height: 85, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Price</Text>
                    <View style={{ width: '100%', height: 59, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
                        <TextInput placeholder='Enter price in USD' />
                    </View>
                </View>

                <View style={{ width: '100%', height: 162, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: SIZES.h5, color: COLORS.royalBlue, fontWeight: '600' }}>Description</Text>
                    <View style={{ width: '100%', height: 136, borderColor: '#8D9BB5', borderRadius: 14, borderWidth: 1, paddingHorizontal: 10 }}>
                        <TextInput placeholder='Tell us more...' style={{ width: '100%', height: '100%' }} />
                    </View>
                </View>

                <ButtonCustomer w={100} h={10} bg={COLORS.royalBlue} lable={'Submit'} color={'white'} />



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