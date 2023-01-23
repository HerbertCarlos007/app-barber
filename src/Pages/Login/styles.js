import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#21201d',
    },

    content: {
        flex: 1,
        alignItems: 'center',
    },

    brand: {
        fontSize: 20,
        color: '#FFF',
        position: 'relative',
        bottom: 10,
    },

    title: {
        fontSize: 70,
        color: '#FFF', 
    },

    subtitle: {
        fontSize: 35,
        color: '#FFF'
    },

    buttonLogin: {
        backgroundColor: 'orange',
        width: 160,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    textLogin: {
        fontSize: 20,
        color: '#FFF',
       
    }
})