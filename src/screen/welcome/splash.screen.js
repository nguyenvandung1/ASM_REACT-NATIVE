import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { st_splash } from './splash.style'
import { ButtonCustomer } from '../../components'


export default function Splashscreen({navigation}) {

    // chuyển đến sign in
    const signin = ()=>{navigation.navigate('singin')}

    const signup = ()=>{navigation.navigate('singup')}

    return (
        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 50, backgroundColor: 'white'}]}>
            <View style={[{ width: '80%', alignItems: 'center' }]}>
                <View style={[{width: '100%', height: 250, justifyContent: 'center'}]}>
                    <Image style={[{ width: '100%', objectFit: 'contain' }]} source={require('../../assets/img_welcome/plash.png')} />
                </View>

                <Text style={[st_splash.title]}>You'll Find <Text style={[{color: '#FCA34D'}]}>All you need</Text> Here!</Text>
                
                <ButtonCustomer lable={'Sign up'} w={'100'} h={10} mt={40} bg={'#4F63AC'} color={'white'} onPress={signup}/>
                <ButtonCustomer lable={'Sign in'} w={'100'} h={10} mt={10} bg={'white'} color={'#4F63AC'} onPress={signin}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})