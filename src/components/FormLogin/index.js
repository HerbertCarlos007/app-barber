import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const FormLogin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.input} placeholder='E-mail' />
                <TextInput style={styles.input} placeholder='Senha' />
                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.textLogin}>Entre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}