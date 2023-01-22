import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { AntDesign } from '@expo/vector-icons'

export const Header = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />


            <View style={styles.content}>
                <TouchableOpacity>
                    <AntDesign name='bars' size={27} color='#FFF' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name='right' size={27} color='#FFF' />
                </TouchableOpacity>
            </View>
        </View>
    )
}