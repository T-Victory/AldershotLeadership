import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from './react-components/CustomText';
import Colours from '../hooks/Colours';
import Banner from './Banner';

interface BannerViewProps {
    heading: string;
    content: string;
    colours: string[];

    banner: Banner;
}

export default function BannerView({ heading, content, colours, banner}: BannerViewProps) {
    // Variable declarations
    const widthVal = '95%';
    const heightVal = 70;



    return (
        <LinearGradient
        colors={colours}
        style={[styles.banner, {width: widthVal, minHeight: heightVal, maxHeight: heightVal}]}
        start={{ x: 0, y: 0.25 }}
        end={{ x: 1, y: 0.75 }}>                

            <CustomText textType='LeagueSpartan-SemiBold' textSize={16} style={{textAlign: 'left', width: '100%'}}>{heading}</CustomText>
            <CustomText textSize={16} style={{textAlign: 'left', width: '100%'}}>{content}</CustomText>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    banner: {
        height: 76,
        borderRadius: 10,
        borderTopLeftRadius: 2.5,
        borderBottomRightRadius: 2.5,
        justifyContent: 'center',
        gap: 2.5,
        paddingHorizontal: 32,
        margin: 16,
    }
});

