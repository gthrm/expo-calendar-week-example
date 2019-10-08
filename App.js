import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

export default function App() {
  let datesWhitelist = [{
    start: moment(),
    end: moment().add(81, 'days')  // total 4 days enabled
  }];
  let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled

  return (
    <View
      style={{ paddingTop: 60 }}
    >
      <CalendarStrip
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
        style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
        calendarHeaderStyle={{ color: 'white' }}
        calendarColor={'#7743CE'}
        dateNumberStyle={{ color: 'white' }}
        dateNameStyle={{ color: 'white' }}
        highlightDateNumberStyle={{ color: 'yellow' }}
        highlightDateNameStyle={{ color: 'yellow' }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
        datesWhitelist={datesWhitelist}
        datesBlacklist={datesBlacklist}
        // iconLeft={require('./img/left-arrow.png')}
        // iconRight={require('./img/right-arrow.png')}
        iconContainer={{ flex: 0.1 }}
        onDateSelected={onDateSelected.bind(this)}
      />
    </View>
  );
}

const onDateSelected = (data) => {
  console.log(data._d);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
