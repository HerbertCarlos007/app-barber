import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='mustache' size={120} color='#FFF'/>
                </TouchableOpacity>

                <Text style={styles.brand}>MARCA</Text>
                <Text style={styles.title}>Barber</Text>
                <Text style={styles.title}>Shop</Text>
            </View>
        </View>
    )
}