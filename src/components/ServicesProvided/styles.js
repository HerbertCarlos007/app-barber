import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {

    },

    title: {
        marginLeft: 20,
        marginTop: 20,
        fontFamily: 'notoSerif'
    },

    servicesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    services: {
        flexDirection: 'row',
    },

    icons: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 15,
        margin: 30,
    },

    textServices: {
       position: 'relative',
       bottom: 10
    },

    serviceTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})