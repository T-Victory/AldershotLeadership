// IMPORTANT! KEEP THIS FILE AS .js, OTHERWISE PROBLEMS MAY OCCUR WHEN BUILDING AND BUNDLING FOR PROD

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colours from '../hooks/Colours';
import LoadFonts from '../hooks/LoadFonts';
import { Link } from 'expo-router';

import Event from '../components/Event';
import MeetingView from '../components/MeetingView';
import GroupView from '../components/GroupView';

import CustomText from '../components/react-components/CustomText';

export default function App() {
  const fontsLoaded = LoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.banner} />
      <View style={styles.body}>
        
        <MeetingView name="Robotics Team" time="10:55 - 12:00" content="Coding team only! Bring your forms!" gradient={['#E3F8FF', '#E8FFF8']} />
        <MeetingView name="Lions Leadership" time="10:55 - 12:00" content="No notes today!" gradient={['#F6EDFF', '#EBEDFF']} />
        <MeetingView name="Sr. Girls Soccer" time="10:55 - 12:00" content="We're in the small gym today!" gradient={['#FFFBED', '#FFF4E9']} />

        <GroupView name="Robotics Team" dates="Everyday @ Lunch" isSubscribed='true' mainContact='Taysen Victory (1victorytay@hdsb.ca)' secondaryContact='Mr. Deane (deanepa@hdsb.ca)' description='Our club provides a platform for members to collaborate, learn, and apply STEM principles in real-world projects. From designing and constructing robots to programming and problem-solving, we cover all aspects of robotics.' />
        <GroupView name="Sr. Girls Soccer" dates="Mon & Wed @ Lunch" mainContact='Ms. Robertson (robertsons@hdsb.ca)' secondaryContact='Taysen Victory (1victorytay@hdsb.ca)' description='Responsible for planning events and organizing school initiatives. We meet in the fishbowl every other Tuesday, we’re always looking for committed student leaders!' />

      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
    marginTop: 128,
    // marginBottom: 64,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    gap: 8,
  }
});
