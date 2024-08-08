import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Group from './Group';
import CustomText from './react-components/CustomText';
import Colours from '../hooks/Colours';

interface MeetingViewProps {
    name: string;
    date: string;
    time: string;
    content: string;
    gradient: string[];

    group: Group;
}

export default function MeetingView({ name, time, content, gradient}: MeetingViewProps) {
    // Variable declarations
    const widthVal = '100%';
    const heightVal = 96;



    return (
        <LinearGradient
        colors={gradient}
        style={[styles.event, {width: widthVal, minHeight: heightVal, maxHeight: (heightVal + 26)}]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>                

            <View style={[styles.main]}>
                <CustomText textType='Manrope-ExtraBold'>{name}</CustomText>
                <CustomText>  |{'\t'}{time}</CustomText>
            </View>
            <CustomText textType='Manrope-Regular' textSize={15} style={{textAlign: 'left', width: '100%', color: Colours.GRAY}}>{content}</CustomText>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        textAlign: 'left',
        flexDirection: 'row',
    },
    event: {
        padding: 18,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
        borderRadius: 8, 
    },
});