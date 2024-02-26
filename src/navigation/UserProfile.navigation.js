import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MylistingUser_screen, Profile_screen } from '../screen/index.screen';
const stack = createStackNavigator();

export default function UserProfile_navigation() {

  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name='profile' component={Profile_screen}/>
        <stack.Screen name='myListting' component={MylistingUser_screen}/>
    </stack.Navigator>
  )
}