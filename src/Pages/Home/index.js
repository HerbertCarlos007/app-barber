import { View, Text } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { ServicesProvided } from '../../components/ServicesProvided'

export const Home = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.containerTexts}>
                    <Text style={styles.textWelcome}>Welcome </Text>
                    <Text style={styles.textName}>Mike!</Text>
                </View>

                <View style={styles.containerDescription}>
                    <Text style={styles.textDescription}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
                    </Text>
                </View>
            </View>

            <ServicesProvided/>
        </>
    )
}