import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { st_signin } from './signin.style'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonCustomer, InputLogin } from '../../components/index'
import { COLORS } from '../../constants/theme'

export default function Signin_screen({ navigation }) {

  const singin = ()=>{navigation.navigate('user')}

  return (
    <View style={[st_signin.container]}>
      <View style={[{ width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
        <TouchableOpacity style={[{ marginEnd: 5 }]} onPress={() => { navigation.goBack() }}>
          <Icon name='arrow-back-outline' color={'#4F63AC'} size={24} />
        </TouchableOpacity>
        <Text style={[st_signin.title]}>Sign In</Text>
      </View>
      <View style={{width: '100%', justifyContent: 'space-between', alignItems: 'center', height: '70%', marginTop: 50}}>
        <View style={[{ width: '80%' }]}>
          <InputLogin type={'text'} nameIcon={'at'} placeholder={'example@gmail.com'} />
          <InputLogin type={'pass'} placeholder={'Pass word'} forgot={true}/>
        </View>
        <ButtonCustomer lable={'Sign in'} w={80} bg={'#4F63AC'} color={'white'} h={10} shadow={true} onPress={singin}/>

        <View style={[{ marginTop: 50, width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
          <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
          <Text style={{ width: '30%', color: COLORS.royalBlue, textAlign: 'center' }}>Or sign in with</Text>
          <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
        </View>

        <ButtonCustomer lable={'G'} w={35} bg={'#3F4A59'} color={'white'} h={10} shadow={true} mt={20} />
        <Text style={[{ color: COLORS.royalBlue }]}>Don’t have an account? <Text style={[{ color: COLORS.royalBlue, fontWeight: '600' }]}>Sign Up</Text></Text>

      </View>
    </View>
  )
}
