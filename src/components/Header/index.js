import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

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
                <TouchableOpacity>
                    <AntDesign name='left' size={27} color='#FFF' onPress={() => navigation.navigate('login')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <AntDesign name='right' size={27} color='#FFF' />
                </TouchableOpacity>
            </View>
        </View>
    )
}