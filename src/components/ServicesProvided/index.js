import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const ServicesProvided = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SERVICES</Text>

            <View style={styles.servicesContainer}>
                <View style={styles.services}>

                    <View style={styles.serviceTextContainer}>
                        <TouchableOpacity style={styles.icons}>
                            <Entypo name='scissors' size={45} />
                        </TouchableOpacity>
                        <Text style={styles.textServices}>Corte</Text>
                    </View>

                    <View style={styles.serviceTextContainer}>
                        <TouchableOpacity style={styles.icons}>
                            <Entypo name='star' size={45} />
                        </TouchableOpacity>
                        <Text style={styles.textServices}>Estilo</Text>
                    </View>

                    <View style={styles.serviceTextContainer}>
                        <TouchableOpacity style={styles.icons}>
                            <FontAwesome name='paint-brush' size={45} />
                        </TouchableOpacity>
                        <Text style={styles.textServices}>Tratamentos</Text>
                    </View>
                </View>

                <View style={styles.services}>
                    <View style={styles.serviceTextContainer}>
                        <TouchableOpacity style={styles.icons}>
                            <MaterialCommunityIcons name='mustache' size={45} />
                        </TouchableOpacity>
                        <Text style={styles.textServices}>Barba</Text>
                    </View>

                    <View style={styles.serviceTextContainer}>
                        <TouchableOpacity style={styles.icons}>
                            <MaterialCommunityIcons name='razor-single-edge' size={45} />
                        </TouchableOpacity>
                        <Text style={styles.textServices}>Depilação</Text>
                    </View>

                    <View style={styles.serviceTextContainer}>
                        <TouchableOpacity style={styles.icons}>
                            <MaterialCommunityIcons name='spray-bottle' size={45} />
                        </TouchableOpacity>
                        <Text style={styles.textServices}>Tratamento</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}