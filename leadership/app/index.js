// IMPORTANT! KEEP THIS FILE AS .js, OTHERWISE PROBLEMS MAY OCCUR WHEN BUILDING AND BUNDLING FOR PROD

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colours from '../hooks/Colours';
import LoadFonts from '../hooks/LoadFonts';
import { Link } from 'expo-router';

import Event from '../components/Event';
import EventView from '../components/EventView';

export default function App() {
  const fontsLoaded = LoadFonts();

  if (!fontsLoaded) {
    return null;
  }



  let name = "Lions Leadership";
  const date = "10:55 - 12:00";
  const content = "Coding team only! Bring your forms!";

  const gradient1 = ['#E3F8FF', '#E8FFF8'];
  const gradient2 = ['#F6EDFF', '#EBEDFF'];


  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <View style={styles.body}>
        <Text style={{ fontFamily: 'LeagueSpartan-SemiBold', fontSize: 36 }}>Lions Connect</Text>
        <Text style={{ fontFamily: 'LeagueSpartan-Medium', fontSize: 21 }}>Home</Text>
        <Text style={{ fontFamily: 'Manrope-SemiBold', fontSize: 16 }}>Display</Text>
        <Text style={{ fontFamily: 'Manrope-Light', fontSize: 16, textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
        <Link href="/calendar">Calendar</Link>

        <EventView name="Hello" time="10:55 - 12:00" content="Coding team only! Bring your forms!" gradient={['#E3F8FF', '#E8FFF8']} />
        <EventView name="Hello" time="10:55 - 12:00" content="Coding team only! Bring your forms!" gradient={['#E3F8FF', '#E8FFF8']} />
        <EventView name="Hello" time="10:55 - 12:00" content="Coding team only! Bring your forms!" gradient={['#E3F8FF', '#E8FFF8']} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '95%',
    height: 70,
    backgroundColor: Colours.GOLD,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    gap: 8,
  }
});
