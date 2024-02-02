import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../constants/theme'
const st_onboar = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: COLORS.title,
        fontSize: SIZES.h1
    },
    content: {
        textAlign: 'center',
        paddingTop: 5,
        color: COLORS.title,

    }
})

export { st_onboar}