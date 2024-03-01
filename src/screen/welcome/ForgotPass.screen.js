import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { Iconify } from 'react-native-iconify'
import { COLORS, SIZES } from '../../constants/theme'
import { ButtonCustomer, InputLogin } from '../../components'
import { sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../auth/FirebaseConfig'

export default function ForgotPass_screen({ navigation }) {
    const auth = FIREBASE_AUTH;
    const [errMailTxt, setErrMailTxt] = useState('');
    const [errMail, setErrMail] = useState(false);
    const [mail, setMail] = useState('');
    const [loading, setLoading] = useState(false);

    const validation = () => {
        let check = false;
        // Validate email
        setErrMail(false);
        if (mail.trim() == '') {
            setErrMail(true);
            check = true;
            console.log(errMail);
            setErrMailTxt('Mail không được để trống')
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            setErrMail(true);
            check = true
            setErrMailTxt('Email không hợp lệ');
        }

        return check;
        
        
    }

    const forgot = async ()=>{
        const check = validation();

        console.log("Lỗi: "+check);
        if(check)return;
        console.log(check);
        setLoading(true);
            try {
                await sendPasswordResetEmail(auth, mail);
                Alert.alert('finally', 'Vui lòng kiểm tra thông báo mail để đặt lại mật khẩu', [
                    {
                       text: 'Ok',
                       style: 'cancel' 
                    }
                ])
            } catch (error) {
                console.log("Lỗi resert pass: "+ error);
                Alert.alert('error', 'Đã xảy ra lỗi vui lòng kiểm tra email và thử lại!', [
                    {
                       text: 'Ok',
                       style: 'cancel' 
                    }
                ])
            } finally{
                setLoading(false);
            }
    }

    const img = require('../../assets/img_welcome/login/forgot.png')
    return (
        <View style={{ flex: 1, paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '80%', height: '100%' }}>
                <View style={[{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
                    <TouchableOpacity style={[{ marginEnd: 5 }]} onPress={() => { navigation.goBack() }}>
                        <Iconify icon='solar:arrow-left-outline' color={'#4F63AC'} size={24} />
                    </TouchableOpacity>
                    <Text style={[st.title]}>Forgot</Text>
                </View>
                <View style={{ width: '100%', height: '40%' }}>
                    <Image source={img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </View>
                <View style={{ width: '100%', height: '40%', justifyContent: 'space-around' }}>
                    <InputLogin type={'text'} placeholder={'example@gmail.com'} nameIcon={'at'} validation={errMail} err={errMailTxt} value={mail}
                        onChangeText={(txt) => { setMail(txt)}}
                    />
                    {
                        !loading ? <ButtonCustomer lable={'Forgot'} w={100} h={20} bg={COLORS.royalBlue} color={'white'} onPress={()=>{forgot()}}/> : <ActivityIndicator color={'red'} size={'large'}/>
                    }
                </View>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    title: {
        color: COLORS.royalBlue,
        fontSize: SIZES.h0,
        fontWeight: '600'
    }
})