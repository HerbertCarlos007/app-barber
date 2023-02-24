import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerDate: {
        marginTop: 30
    },

    containerTime: {
        marginTop: 20
    },

    buttonPicker: {
       
    },

    summaryContainerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    titleSummary: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'montserratSemiBold'
    },

    summaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    summary: {
        flexDirection: 'row'
    },

    leftSide: {
        width: 90,
        height: 160,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },

    line: {
        width: 50,
        height: 2,
        backgroundColor: '#000',
        marginTop: 5,
        marginBottom: 5
    },
    rightSide: {
        backgroundColor: '#f6e0c8',
        width: 290,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    day: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'montserratItalic',
        
    },

    time: {
        fontSize: 18,
        fontFamily: 'montserratSemiBold',
    },

    icons: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 15,
        margin: 10,
    },

    textServices: {
        position: 'relative',
        left: 22
    }
})
