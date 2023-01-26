import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'

export const Header = () => {
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <View style={styles.content}>
                <TouchableOpacity >
                    <AntDesign name='bars' size={27} color='#FFF' onPress={() => navigation.openDrawer()} />
                </TouchableOpacity>
            </View>
        </View>
    )
}