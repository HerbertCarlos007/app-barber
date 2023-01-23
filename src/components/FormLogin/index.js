import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const FormLogin = ( {switchLogin} ) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.input} placeholder='E-mail' />
                <TextInput style={styles.input} placeholder='Senha' />
                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.textLogin}>Entre</Text>
                </TouchableOpacity>
                <Text style={styles.textRegister}>
                    Não é registrado? {'\n'}
                </Text>
                <TouchableOpacity onPress={switchLogin}>
                    <Text style={styles.linkRegister}>Registre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}