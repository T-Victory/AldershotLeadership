import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>calendar</Text>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})