import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from './styles'

import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { getHours } from "date-fns";

export const Calendar = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(getHours(0))

  const handleChangeDate = (date) => {
    setSelectedDate(date)
  }

  const handleChangeTime = (time) => {
    setSelectedTime(time)

  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };



  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true)
  }

  const hideTimePicker = () => {
    setTimePickerVisibility(false)
  }

  const handleConfirmDate = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const handleConfirmTime = (time) => {
    console.warn("A time has been picked: ", time);
    hideTimePicker();
  };



  return (
    <View>
      <View style={styles.containerDate}>
        <Button color='orange' title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
          value={selectedDate}
          onChange={handleChangeDate}
        />
      </View>

      <View style={styles.containerTime}>
        <Button color='orange' title="Show Time Picker" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          minimumDate={new Date()}
          value={selectedTime}
          onChange={handleChangeTime}
        />
      </View>

      <View style={styles.summaryContainerTitle}>
        <Text style={styles.titleSummary}>SUMMARY YOUR APPOINTMENT</Text>
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summary}>
          <View style={styles.leftSide}>
            <Text style={styles.day}>Fri</Text>
            <Text style={styles.day}>24</Text>
            <View style={styles.line}></View>
            <Text style={styles.time}>2pm</Text>
          </View>

          <View style={styles.rightSide}>
            <View >
              <TouchableOpacity style={styles.icons}>
                <Entypo name='scissors' size={27} />
              </TouchableOpacity>
              <Text style={styles.textServices}>Corte</Text>
            </View>

            <View >
              <TouchableOpacity style={styles.icons}>
                <Entypo name='star' size={27} />
              </TouchableOpacity>
              <Text style={styles.textServices}>Corte</Text>
            </View>

            <View >
              <TouchableOpacity style={styles.icons}>
                <FontAwesome name='paint-brush' size={27} />
              </TouchableOpacity>
              <Text style={styles.textServices}>Corte</Text>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
};

