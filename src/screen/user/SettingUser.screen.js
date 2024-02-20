import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Iconify } from 'react-native-iconify'

export default function SettingUser_screen() {

    const ItemInformation = ({ title, lable, }) => {
        return (
            <TouchableOpacity style={[st.item, st.shadow]}>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={{ color: 'gray' }}>
                        {title}
                    </Text>
                    <Text style={[st.titleIitems]}>
                        {lable}
                    </Text>
                </View>


            </TouchableOpacity>
        )
    }


    const ItemHelp = ({ title, lable, }) => {
        return (
            <TouchableOpacity style={[st.item, st.shadow, { justifyContent: 'space-between' }]}>
                <View style={{ justifyContent: 'center' }}>

                    <Text style={[st.titleIitems]}>
                        {lable}
                    </Text>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Iconify icon='solar:alt-arrow-right-outline' size={25} color={COLORS.royalBlue} />
                </TouchableOpacity>

            </TouchableOpacity>
        )
    }
    return (
        <View style={[st.container]}>
            <View style={[st.container_show]}>

                <View style={[st.header]}>
                    <Text style={[st.text_title]}>Settings</Text>
                </View>
                <ScrollView style={{ width: '100%', height: '100%' }}>
                    <View style={[st.container_items]}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[st.text_title, st.title_container_item]}>Personal Information</Text>
                            <TouchableOpacity><Iconify icon='eva:edit-2-outline' size={24} color={'grey'} /></TouchableOpacity>
                        </View>
                        {
                            <ItemInformation title={'Name'} lable={'Bruno Pham'} />
                        }
                        {
                            <ItemInformation title={'E-mail'} lable={'bruno203@gmail.com'} />
                        }

                    </View>

                    <View style={[st.container_items]}>
                        <Text style={[st.text_title, st.title_container_item]}>Help Center</Text>
                        {
                            <ItemHelp lable={'FAQ'} />

                        }
                        {<ItemHelp lable={'Contact Us'} />}
                        {<ItemHelp lable={'Privacy & Terms'} />}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container_show: {
        width: '90%',
        height: '100%',
        alignItems: 'center'
    },

    header: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_title: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
    },
    container_items: {
        width: '100%',
        height: '45%',

    },
    title_container_item: {
        color: '#909191',
        fontWeight: '600'
    },
    item: { width: '100%', height: '25%', backgroundColor: 'white', padding: 15, flexDirection: 'row', alignContent: 'center', marginVertical: 20 },
    shadow: {
        shadowColor: 'rgba(138, 149, 158, 0.2)',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 40

    },
    titleIitems: { marginBottom: 10, fontSize: 18, fontWeight: 'bold', color: COLORS.royalBlue },

})