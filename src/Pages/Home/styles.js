import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#21201d',
        padding: 30,
    },

    textWelcome: {
        color: '#fff',
        fontFamily: 'montserrat',
        fontSize: 15,
    },

    textName: {
        color: '#fff',        
        fontFamily: 'notoSerif',
        fontSize: 30,
        position: 'relative',
        bottom: 17
    },

    containerTexts: {
        flexDirection: 'row',
        position: 'relative',
        bottom: 15,
    },

    containerDescription: {
        width: 350,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'orange',
        alignItems: 'center',
        
    },

    textDescription: {
        padding: 10,
        fontFamily: 'notoSerif',
       
    }
})