import { View, Text } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'

import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

export const Scheduling = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.containerCalendar}>
                    <Text style={styles.textAppointment}>APPOINTMENT</Text>
                    <Text style={styles.textChooseDate}>Choose your slot</Text>
                </View>
            </View>
        </>
    )
}