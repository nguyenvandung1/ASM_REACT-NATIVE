import { Dimensions, StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme";
const {width, height} = Dimensions.get('screen')

const st_signin = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', paddingTop: 25,
    },
    title: {
        color: COLORS.royalBlue,
        fontSize: SIZES.h0,
        fontWeight: '600'
    }
    

})

export {st_signin}