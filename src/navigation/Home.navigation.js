import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createStackNavigator } from '@react-navigation/stack'
import { HomeUser_Screen, Product_screen } from '../screen/index.screen';
export default function Home_navigation() {
    const stack = createStackNavigator();
    return (
        <stack.Navigator screenOptions={{ headerShown: false}}>
            <stack.Screen name='home' component={HomeUser_Screen} />
        </stack.Navigator>
    )
}

const styles = StyleSheet.create({})