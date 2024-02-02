import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'
import { st_signin } from './signin.style'
// import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonCustomer, InputLogin } from '../../components/index'
import { COLORS } from '../../constants/theme'
import CheckBox_Customer from '../../components/checkBox.components'

export default function Signup_screen({ navigation }) {
  return (
    <View style={[st_signin.container]}>
      <View style={[{ width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
        <TouchableOpacity style={[{ marginEnd: 5 }]} onPress={() => { navigation.goBack() }}>
          <Icon name='arrow-back-outline' color={'#4F63AC'} size={24} />
        </TouchableOpacity>
        <Text style={[st_signin.title]}>Sign up</Text>
      </View>

      <View style={[{ width: '100%', alignItems: 'center' }]}>
        <View style={[{ width: '80%', alignItems: 'center' }]}>
          <InputLogin type={'text'} nameIcon={'user'} placeholder={'Full name'} />
          <InputLogin type={'text'} nameIcon={'at'} placeholder={'example@gmail.com'} />
          <InputLogin type={'pass'} placeholder={'Pass word'} forgot={false} />
          <InputLogin type={'pass'} placeholder={'Re-enter pass word'} forgot={false} />
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10 }}>
            <CheckBox_Customer />
            <Text style={{ color: COLORS.royalBlue, marginStart: 10 }}>I agree with <Text style={{ fontWeight: '500' }}>Terms</Text> & <Text style={{ fontWeight: '500' }}>Privacy</Text></Text>
          </View>
          <ButtonCustomer lable={'Sign up'} w={100} bg={'#4F63AC'} color={'white'} h={10} shadow={true} mt={25} />

          <View style={[{ marginTop: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
            <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
            <Text style={{ width: '30%', color: COLORS.royalBlue, textAlign: 'center' }}>Or sign in with</Text>
            <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
          </View>

          <ButtonCustomer lable={'G'} w={35} bg={'#3F4A59'} color={'white'} h={9} shadow={true} mt={20} />

          <Text style={[{ color: COLORS.royalBlue, fontWeight: '500', marginTop: 20 }]}>Already have an account? <Text style={{ fontWeight: '700' }}>Sign In</Text></Text>
        </View>

      </View>
    </View>

  )
}


