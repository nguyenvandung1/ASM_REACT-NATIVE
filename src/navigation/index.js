import { NavigationContainer } from "@react-navigation/native";
import Welcome_navigation from "./welcome.navigation"
import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'

const stack = createStackNavigator();
export default function Navigation_app() {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name="welcome" component={Welcome_navigation} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
