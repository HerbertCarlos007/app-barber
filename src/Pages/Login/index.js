import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ModalComponent } from '../../components/Modal'

import { FormLogin } from '../../components/FormLogin'
import { FormRegister } from '../../components/FormRegister'

export const Login = () => {

    const [showModal, setShowModal] = useState(false)
    const [isLoggin, setIsLoggin] = useState(true)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const switchLogin = () => {
        setIsLoggin(!isLoggin)
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='mustache' size={120} color='#FFF' />
                </TouchableOpacity>

                <Text style={styles.brand}>MARCA</Text>
                <Text style={styles.title}>Barber</Text>
                <Text style={styles.title}>Shop</Text>
                <Text style={styles.subtitle}>best style</Text>

                <TouchableOpacity style={styles.buttonLogin} onPress={handleOpenModal}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            </View>

            <ModalComponent
                visibleModal={showModal}
                onClose={handleCloseModal}
            >
                {isLoggin ? <>
                    <FormLogin switchLogin={switchLogin} />
                </> :

                    <>
                        <FormRegister switchLogin={switchLogin} />
                    </>
                }
            </ModalComponent>
        </View>
    )
}