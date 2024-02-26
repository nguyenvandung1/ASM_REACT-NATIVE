import { Alert, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { st_signin } from './signin.style'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonCustomer, InputLogin } from '../../components/index'
import { COLORS } from '../../constants/theme'
import { useAuth, useUserLogin } from '../../context/Favorite.context'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../../auth/FirebaseConfig'
// import { ActivityIndicator } from 'react-native-web'


export default function Signin_screen({ navigation }) {
  const { listAccount, setListAccount } = useAuth()
  const { userLogin, setUserLogin } = useUserLogin()
  const auth = FIREBASE_AUTH;

  // value
  const [ipMail, setMail] = useState('');
  const [ipPass, setPass] = useState('');
  const [errMail, setErrMail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [errMailTxt, setErrMailTxt] = useState('');
  const [errPassTxt, setErrPassTxt] = useState('');
  const [loading, setLoading] = useState(false)


  const singin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, ipMail, ipPass);
      const { uid, email, displayName} = response.user
      console.log(uid+" "+email+" "+displayName);
        setUserLogin({
        name: displayName,
        mail: email,
        id: uid
      })
      navigation.navigate('user');
    } catch (error) {
      console.log("Lỗi: "+error);
      Alert.alert('Lỗi đăng nhập!', 'Vui lòng kiểm tra lại tài khoản hoặc mật khẩu!', [
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ])
    } finally {
      setLoading(false);
    }



  }


  return (
    <View style={[st_signin.container]}>
      <View style={[{ width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
        <TouchableOpacity style={[{ marginEnd: 5 }]} onPress={() => { navigation.goBack() }}>
          <Icon name='arrow-back-outline' color={'#4F63AC'} size={24} />
        </TouchableOpacity>
        <Text style={[st_signin.title]}>Sign In</Text>
      </View>
      <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', height: '70%', marginTop: 50 }}>
        <View style={[{ width: '80%' }]}>
          <InputLogin type={'text'} nameIcon={'at'} placeholder={'example@gmail.com'} validation={errMail} err={errMailTxt} value={ipMail} onChangeText={(value) => { setMail(value); setErrMail(false) }} />
          <InputLogin type={'pass'} placeholder={'Pass word'} forgot={true} validation={errPass} err={errPassTxt} value={ipPass} onChangeText={(value) => { setPass(value); setErrPass(false) }} />
        </View>


        {
          loading ? (
            <ActivityIndicator size={'large'} color={'black'} />
          ) : (
            <>
              <ButtonCustomer lable={'Sign in'} w={80} bg={'#4F63AC'} color={'white'} h={10} shadow={true} onPress={()=>{singin()}} />
            </>
          )
        }

        <View style={[{ marginTop: 50, width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
          <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
          <Text style={{ width: '30%', color: COLORS.royalBlue, textAlign: 'center' }}>Or sign in with</Text>
          <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
        </View>

        <ButtonCustomer lable={'G'} w={35} bg={'#3F4A59'} color={'white'} h={10} shadow={true} mt={20} />
        <Text style={[{ color: COLORS.royalBlue }]}>Don’t have an account? <Text style={[{ color: COLORS.royalBlue, fontWeight: '600' }]} onPress={() => { navigation.navigate('singup') }}>Sign Up</Text></Text>

      </View>
    </View>
  )
}
