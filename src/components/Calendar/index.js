import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

import { styles } from './styles'

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const selectDate = (date) => {
    console.log(date);
  };

  // Crie uma matriz de dias do mês atual
  const daysArray = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // Crie uma matriz de semanas do mês atual
  const weeksArray = [];
  let week = [];
  daysArray.forEach((day, index) => {
    if (index > 0 && day.getDate() === 1) {
      weeksArray.push(week);
      week = [];
    }
    week.push(day);
    if (index === daysArray.length - 1) {
      weeksArray.push(week);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Prev" onPress={prevMonth} />
        <Text style={styles.title}>{format(currentMonth, 'MMMM yyyy')}</Text>
        <Button title="Next" onPress={nextMonth} />
      </View>
      <View style={styles.calendar}>
        {weeksArray.map((week, index) => (
          <View style={styles.week} key={index}>
            {week.map((day, index) => (
              <View style={styles.day} key={index} onPress={() => selectDate(day)}>
                <Text style={styles.dayText}>{day.getDate()}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

