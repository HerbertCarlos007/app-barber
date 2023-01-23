import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native'
import { styles } from './styles'

export const FormRegister = ( { switchLogin } ) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.input} placeholder='E-mail' />
                <TextInput style={styles.input} placeholder='Senha' />
                <TextInput style={styles.input} placeholder='Celular' />
                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.textLogin}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity  >
                    <Text style={styles.buttonBackLogin} onPress={switchLogin}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}