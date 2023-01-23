import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'rgba(0,0,0,0.6)'
    },

    content: {
        width: 311,
        backgroundColor: '#FFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    closeIcon: {
        alignSelf: 'flex-end',
        margin: 16
    },

    label: {
        color: '#000'
    },
})