import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/theme'

export default function Header_components({lable}) {
    return (
        <View style={[st.titleHeader]}>
            <Text style={[st.text]}>Find All You Need</Text>
        </View>
    )
}

const st = StyleSheet.create({
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        height: 40
    },
    text: {textAlign: 'center', fontSize: SIZES.h4, color: 'black', fontWeight: '700'}
    

})