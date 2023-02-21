import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        color: '#FFF'
    },
    calendar: {
        flex: 1,

    },
    week: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    day: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',

    },
    dayText: {
        fontSize: 18,
        color: '#FFF',

    },
})
