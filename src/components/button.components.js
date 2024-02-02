

import { StyleSheet, Text, TouchableOpacity, View, shadow } from 'react-native'
import React from 'react'

export default function ButtonCustomer({ lable, w, onPress, h, mt, bg, color, shadow }) {
  return (
    <TouchableOpacity style={[{ width: `${w}%`, height: `${h}%`, justifyContent: 'center', alignItems: 'center', marginTop: mt, backgroundColor: bg }, shadow ? st.btnWithShadow : st.btn]} onPress={onPress} >
      <Text style={[st.lable, { color: color }]}>{lable}</Text>
    </TouchableOpacity>
  )
}

const st = StyleSheet.create({
  btn: {
    borderRadius: '8',
  },
  lable: {
    fontSize: 16,
    fontWeight: '700'
  },
  btnWithShadow: {
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    // shadowRadius: 8,
    // Android
    elevation: 5,
  },
})