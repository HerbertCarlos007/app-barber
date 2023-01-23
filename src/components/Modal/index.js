import { View, Text, Modal, Button, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export const ModalComponent = ({ visibleModal, onClose, children }) => {

    const [closeModal, setCloseModal] = useState(false)

    return (
        <Modal
            visible={visibleModal}
            transparent
            statusBarTranslucent
            animationType='slide'
        >
            <View style={styles.container}  >
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <MaterialIcons name='close' size={20} color='#000'/>
                    </TouchableOpacity>
                   {children}
                </View>
            </View>
        </Modal>
    )
}
