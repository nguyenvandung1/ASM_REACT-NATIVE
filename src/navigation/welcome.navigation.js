import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { Onboarding_screen, Signup_screen, Signin_screen, Splashscreen, ForgotPass_screen } from "../screen/index.screen"
const stack = createStackNavigator();

export default function Welcome_navigation() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name='onboarding' component={Onboarding_screen} />
      <stack.Screen name='splash' component={Splashscreen}/>
      <stack.Screen name='singup' component={Signup_screen} />
      <stack.Screen name='singin' component={Signin_screen} />
      <stack.Screen name='forgot' component={ForgotPass_screen}/>
    </stack.Navigator>
  )
}
