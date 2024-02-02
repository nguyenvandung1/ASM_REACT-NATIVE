import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants/theme'

export default function CheckBox_Customer() {

    const [check, setCheck] = useState(false)

    return (
        <TouchableOpacity style={[st.check_container, check ? st.checkTrue: st.checkFalse]} onPress={()=>{setCheck(!check)}}>
            {check && <Icon name='checkmark' size={15} color={'white'}/>}
        </TouchableOpacity>
  )
}

const st = StyleSheet.create({
    check_container: {
        borderColor: "#8D9BB5",
        borderWidth: 2,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    checkTrue: {
        backgroundColor: '#8D9BB5'
    },
    checkFalse: {
    }
})