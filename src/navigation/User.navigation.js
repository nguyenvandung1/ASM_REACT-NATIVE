import React from 'react'
import { FavoriteUser_screen, HomeUser_Screen, SettingUser_screen } from '../screen/index.screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-vector-icons/Fontisto'
import { Iconify } from 'react-native-iconify'
import { StyleSheet, View, Text } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'

import Home_navigation from "./Home.navigation";

const Tab = createBottomTabNavigator();
export default function User_Navigation() {
    const size = 30;
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            // tabBarIconStyle: {width: '20%'},
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                justifyContent: 'flex-end',
                // alignItems: 'center',
                width: '100%',
                height: `${SIZES.tabBottom}%`,
                color: 'black'
                // backgroundColor: 'orange'
            },
            tabBarIcon: ({ focused, color }) => {
                if (route.name === 'home_user') {
                    return (
                        <View style={[st.container]}>
                            {focused ? <Iconify icon={"clarity:home-solid"} size={30} color={COLORS.royalBlue} /> : <Iconify icon={"clarity:home-line"} size={30} color="rgba(153, 153, 153, 1)" />}
                        </View>
                    )
                } else if (route.name === 'favorite_user') {
                    return (
                        <View style={[st.container]}>
                            {focused ? <Iconify icon={"iconamoon:bookmark-fill"} size={30} color={COLORS.royalBlue} /> : <Iconify icon={"iconamoon:bookmark-light"} size={30} color="rgba(153, 153, 153, 1)" />}
                        </View>
                    )
                } else if (route.name === 'setting_user') {
                    return (
                        <View style={[st.container]}>
                            {focused ? <Iconify icon={"mdi:user"} size={30} color={COLORS.royalBlue} /> : <Iconify icon={"mdi:user-outline"} size={30} color="rgba(153, 153, 153, 1)" />}
                        </View>
                    )
                }
            },
        })}>
            <Tab.Screen name='home_user' component={Home_navigation} />
            <Tab.Screen name='favorite_user' component={FavoriteUser_screen} />
            <Tab.Screen name='setting_user' component={SettingUser_screen}/>
        </Tab.Navigator>
    )
}



const st = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 20,
        // width: '%',
        height: 40,
        // backgroundColor: 'orange'

    },
    text: {
        marginStart: 2,
        color: 'rgb(39 39 42)',
        fontWeight: '600'
    }
})