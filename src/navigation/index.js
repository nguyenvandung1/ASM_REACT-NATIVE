import { NavigationContainer } from "@react-navigation/native";
import Welcome_navigation from "./welcome.navigation"
import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import User_Navigation from "./User.navigation";
import { Product_screen } from "../screen/index.screen";
const stack = createStackNavigator();
export default function Navigation_app() {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name="welcome" component={Welcome_navigation} />
                <stack.Screen name="user" component={User_Navigation} />
                <stack.Screen name='product' component={Product_screen}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
