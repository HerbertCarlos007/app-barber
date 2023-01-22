import { StyleSheet, StatusBar } from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#21201d',
      paddingTop: statusBarHeight,
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 16,
      flexDirection: 'row'

    },

    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    }
  });
  