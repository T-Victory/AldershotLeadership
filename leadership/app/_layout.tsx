import React from 'react';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slot, Tabs } from 'expo-router';
import TabBar from '../components/TabBar'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Tabs
      tabBar={props => <TabBar {...props}/>}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calander"
        }}
      />
      <Tabs.Screen
        name="channels"
        options={{
          title: "Channels"
        }}
      />

    </Tabs>
  );
}

export default RootLayout

