import { StyleSheet } from 'react-native';
import Colors from './colors';
import Font from './fonts';
import fontScale from './fontScale';


const commonStyles = StyleSheet.create({
    header: {
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf:'flex-end'
        // elevation:6
    },
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    title:{
        fontFamily: Font.mediumBold,
        fontSize: fontScale.headerText,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: Colors.anotherDarkGrey,
    },
    cardShadow: {
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
    }
});
export default commonStyles;
