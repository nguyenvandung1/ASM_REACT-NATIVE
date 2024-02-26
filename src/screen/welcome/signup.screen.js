import { Image, Text, TouchableOpacity, View, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { st_signin } from './signin.style'
// import Icon from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonCustomer, InputLogin } from '../../components/index'
import { COLORS } from '../../constants/theme'
import CheckBox_Customer from '../../components/checkBox.components'
import { useAuth, useFavoriteProducts } from '../../context/Favorite.context'
import { FIREBASE_AUTH } from '../../../auth/FirebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function Signup_screen({ navigation }) {
  const { listAccount, setListAccount } = useAuth();
  const { favoriteProducts, setFavoriteProducts } = useFavoriteProducts();

  const [check, setCheck] = useState(false)

  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');

  const [errName, setErrName] = useState(false);
  const [errMail, setErrMail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [errRePass, setErrRePass] = useState(false);

  const [eNameTxt, setEnameTxt] = useState('');
  const [eMailTxt, setEMailTxt] = useState('');
  const [ePassTxt, setEPassTxt] = useState('');
  const [eRePassTxt, setERePassTxt] = useState('');

  function validateForm() {
    setErrName(false);
    setErrMail(false);
    setErrPass(false);
    setErrRePass(false);
    setEnameTxt('');
    setEMailTxt('');
    setEPassTxt('');
    setERePassTxt('');

    // Validate name
    if (name.trim() === '') {
      setErrName(true);
      setEnameTxt('Tên không được để trống');
    }

    // Validate email
    if (mail.trim() == '') {
      setErrMail(true)
      setEMailTxt('Mail không được để trống')
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      setErrMail(true);
      setEMailTxt('Email không hợp lệ');
    }

    // Validate password
    if (pass.trim() === '') {
      setErrPass(true);
      setEPassTxt('Mật khẩu không được để trống');
    } else if (pass.length < 8) {
      setErrPass(true);
      setEPassTxt('Mật khẩu phải có ít nhất 8 ký tự');
    }

    // Validate re-password
    if (rePass.trim() == '') {
      setErrRePass(true);
      setERePassTxt('Mật khẩu xác nhận không được để trống');
    } else if (rePass !== pass) {
      setErrRePass(true);
      setERePassTxt('Mật khẩu xác nhận không khớp');
    }

    // Validate check
    if (!check) {


      Alert.alert('Điều khoản & điều kiện', 'Vui lòng xác nhận bạn đồng ý với điều khoản của chúng tôi!', [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => { setCheck(true) }
        }
      ])
    }

    // Check if any errors exist
    return !errName && !errMail && !errPass && !errRePass && check;
  }



  const singup = async () => {
    const validation = validateForm();
    if (!validation) {
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, mail, pass);
      await updateProfile(response.user, {
        displayName: name
      })
    } catch (error) {
      console.log("Lỗi: " + error);
      if (error.code === 'auth/email-already-in-use') {
        // Xử lý khi địa chỉ email đã được sử dụng
        setErrMail(true);
        setEMailTxt('Email đã tồn tại');
        Alert.alert('Error!', 'Email đã được sử dụng!', [
          {
            text: 'Cancel',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },])
      } else {
        // Xử lý các loại ngoại lệ khác từ Firebase
        Alert.alert('Error!', 'Vui lòng liên hệ hỗ trợ: 0346477714!', [
          {
            text: 'Cancel',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },])
      }

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
        <Text style={[st_signin.title]}>Sign up</Text>
      </View>

      <ScrollView style={{ width: '100%' }}>
        <View style={[{ width: '100%', alignItems: 'center', marginBottom: 150 }]}>
          <View style={[{ width: '80%', alignItems: 'center' }]}>
            <InputLogin type={'text'} nameIcon={'user'} placeholder={'Full name'} validation={errName} err={eNameTxt} value={name} onChangeText={(value) => { setName(value); setErrName(false) }} />
            <InputLogin type={'text'} nameIcon={'at'} placeholder={'example@gmail.com'} validation={errMail} err={eMailTxt} value={mail} onChangeText={(value) => { setMail(value); setErrMail(false) }} />
            <InputLogin type={'pass'} placeholder={'Pass word'} forgot={false} validation={errPass} err={ePassTxt} value={pass} onChangeText={(value) => { setPass(value); setErrPass(false) }} />
            <InputLogin type={'pass'} placeholder={'Re-enter pass word'} forgot={false} validation={errRePass} err={eRePassTxt} value={rePass} onChangeText={(value) => { setRePass(value); setErrRePass(false) }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10 }}>
              <CheckBox_Customer check={check} setCheck={setCheck} />
              <Text style={{ color: COLORS.royalBlue, marginStart: 10 }}>I agree with <Text style={{ fontWeight: '500' }}>Terms</Text> & <Text style={{ fontWeight: '500' }}>Privacy</Text></Text>
            </View>
            {
              loading ? (
                <ActivityIndicator size={'large'} color={'black'} />
              ) : (
                <>
                  <ButtonCustomer lable={'Sign up'} w={100} bg={'#4F63AC'} color={'white'} h={10} shadow={true} mt={25} onPress={() => { singup() }} />
                </>
              )
            }

            <View style={[{ marginTop: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
              <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
              <Text style={{ width: '30%', color: COLORS.royalBlue, textAlign: 'center' }}>Or sign in with</Text>
              <View style={[{ width: '33%', height: 2, backgroundColor: '#DADADA' }]}></View>
            </View>

            <ButtonCustomer lable={'G'} w={35} bg={'#3F4A59'} color={'white'} h={9} shadow={true} mt={20} />

            <Text style={[{ color: COLORS.royalBlue, fontWeight: '500', marginTop: 20 }]}>Already have an account? <Text style={{ fontWeight: '700' }} onPress={() => { navigation.navigate('singin') }}>Sign In</Text></Text>
          </View>

        </View>
      </ScrollView>
    </View>

  )
}


