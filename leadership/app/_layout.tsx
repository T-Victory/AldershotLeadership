import React from 'react';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slot } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Slot />
  );
}

export default RootLayout

