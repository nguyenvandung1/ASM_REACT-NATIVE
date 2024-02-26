import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Iconify } from 'react-native-iconify'

import { ButtonCustomer } from '../../components/index'

export default function Profile_screen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ width: '90%', height: '100%' }}>

        <View style={{ width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center' }}>

          <Text style={[st.text]}>Profile</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0 }}>
            <Iconify icon='ion:log-out-outline' size={24} color={COLORS.royalBlue} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: '10%', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Elina Hovakimyan</Text>
          <Text style={{ color: '#808080', marginTop: 15 }}>hello@gmail.com</Text>
        </View>

        <View style={{ width: '100%', height: '35%', marginTop: '10%', justifyContent: 'space-around' }}>
          <TouchableOpacity style={[st.item, st.shadow]} onPress={()=>{navigation.navigate('myListting')}}>
            <View>
              <Text style={[st.titleIitems]}>
                My Listings
              </Text>
              <Text>
                Already have 10 listing
              </Text>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Iconify icon='solar:alt-arrow-right-outline' size={25} color={COLORS.royalBlue} />
            </TouchableOpacity>

          </TouchableOpacity>

          <TouchableOpacity style={[st.item, st.shadow]} onPress={()=>{navigation.navigate('setting')}}>
            <View>
              <Text style={[st.titleIitems]}>
                Settings
              </Text>
              <Text>
                Account, FAQ, Contact
              </Text>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Iconify icon='solar:alt-arrow-right-outline' size={25} color={COLORS.royalBlue} />
            </TouchableOpacity>

          </TouchableOpacity>
        </View>

        <View style={{width: '100%', height: '9%', position: 'absolute', bottom: 20,}}>
          <ButtonCustomer lable={'Add a new listing'} color={'white'} w={100} h={100} bg={COLORS.royalBlue} onPress={()=>{navigation.navigate('create')}}/>
        </View>
      </View>
    </View>
  )
}

const st = StyleSheet.create({
  text: { textAlign: 'center', fontSize: SIZES.h4, color: 'black', fontWeight: '700' },
  item: { width: '100%', height: '35%', backgroundColor: 'white', padding: 15, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' },
  shadow: {
    shadowColor: 'rgba(138, 149, 158, 0.2)',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 40

  },
  titleIitems: { marginBottom: 10, fontSize: 18, fontWeight: 'bold', color: COLORS.royalBlue },
})