import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function InputLogin({ type, nameIcon, placeholder, onChangeText, value, forgot }) {

    const [showText, setShowText] = useState(true);

    if (type == 'pass') {
        return (
            <View style={[{ width: '100%', borderBottomWidth: 1, paddingVertical: 5, flexDirection: 'row', marginVertical: 25 }, forgot ? st.forgotTrue : st.forgotFalse]}>
                <TouchableOpacity onPress={() => { setShowText(!showText) }}>
                    <Icon name={showText ? 'eye' : 'eye-slash'} size={24} color={'#b3b3b3'} />
                </TouchableOpacity>
                <TextInput secureTextEntry={showText} value={value} onChangeText={onChangeText} placeholder={placeholder} style={[{ marginStart: 10, width: '70%' }]} />
                {forgot && <TouchableOpacity><Text>Forgot</Text></TouchableOpacity>}
            </View>
        )
    } else if (type == 'text') {
        return (
            <View style={[{ width: '100%', borderBottomWidth: 1, paddingVertical: 5, flexDirection: 'row', marginVertical: 25, }]}>
                <Icon name={nameIcon} size={24} color={'#b3b3b3'} />
                <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={[{ marginStart: 10, width: '70%' }]} />
            </View>
        )
    } else if (type == 'number') {
        return (
            <View style={[{ width: '100%', borderBottomWidth: 1, paddingVertical: 5, flexDirection: 'row', marginVertical: 25 }]}>
                <Icon name={nameIcon} size={24} color={'#b3b3b3'} />
                <TextInput keyboardType="numeric" value={value} onChangeText={onChangeText} placeholder={placeholder} style={[{ marginStart: 10, width: '90%' }]} />
            </View>
        )
    } else {
        return (
            <Text>type: number, pass, text</Text>
        )
    }
}

const st = StyleSheet.create({
    forgotTrue: {
        justifyContent: 'space-between'
    },
    forgotFalse: {

    }
})