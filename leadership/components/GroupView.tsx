import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Group from './Group';
import Colours from '../hooks/Colours';
import CustomText from '../components/react-components/CustomText';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface GroupViewProps {
    name: string;
    dates: string;
    location: string;
    description: string;
    mainContact: string;
    secondaryContact: string;

    group: Group;

    
    // This is a local variable while all the others are universal across all systems
    // This is probably going to have to be moved later on
    isSubscribed: boolean;
}

export default function GroupView({ name, dates, location, description, mainContact, secondaryContact, isSubscribed}: GroupViewProps) {
    // Variable declarations
    const widthVal = '100%';
    const heightVal = 24;
    const fullHeightVal = 240;
    const gradient = ['#EBEDFF', '#E3F8FF'];

    // let isOpen = this.setState;

    let paddingBottom = 18;
    const [isOpen, setIsOpen] = useState(false);

    if(isOpen) {
        paddingBottom = 12;
    } else {
        paddingBottom = 18;
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            setIsOpen(!isOpen);
            }} 
        style={{backgroundColor: '#f00', padding: 50, margin: 10}}>
            <LinearGradient
            colors={gradient}
            style={[styles.event, {width: widthVal, minHeight: heightVal, paddingBottom: paddingBottom}]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>

                <View style={{flexDirection: 'row'}}>
                    <View style={[styles.main, {width: '100%'}]}>
                        <CustomText textType="Manrope-ExtraBold">{name}</CustomText>
                        <CustomText style={{color: Colours.GRAY}}>  |{'\t'}{dates}</CustomText>
                    </View>
                    {/* <FontAwesome name="bell" size={10} color="black" style={{}}/> */}
                    {isSubscribed &&
                    <View style={styles.dogearContainer}>
                        <View style={styles.dogear} />
                    </View>
                    }
                </View>
                {isOpen && 
                <View style={{width: '100%', gap: 12, alignItems: 'center'}}>
                    <CustomText textSize={15} style={styles.textBody}>{description}</CustomText>
                    {mainContact && secondaryContact ? (
                        <CustomText textSize={15} style={[styles.textBody, {opacity: 0.75}]}>
                            Reach out to {mainContact} or {secondaryContact} for more details.
                        </CustomText>
                    ) : (
                        <CustomText textSize={15} style={[styles.textBody, {opacity: 0.75}]}>
                            Reach out to {mainContact} for more details.
                        </CustomText>
                    )}

                    {isSubscribed ? (
                        <CustomText textSize={11} style={[styles.textBody, {opacity: 1, color: Colours.GREEN, textAlign: 'center'}]}>Receiving Notifications</CustomText>
                    ) : (
                        <CustomText textSize={11} style={[styles.textBody, {opacity: 1, color: Colours.GREEN, textAlign: 'center'}]}>Not Receiving Notifications</CustomText>
                    )}
                    
                    
                </View>
                }
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    event: {
        padding: 18,
        flexDirection: 'column',
        borderRadius: 12, 
        gap: 18,
        alignItems: 'center',
    },
    eventClosed: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textBody: {
        color: Colours.GRAY,
        textAlign: 'left',
        width: '90%',
    },


    dogearContainer: {
        position: 'absolute',
        top: -18,
        left: -18,
    },
    dogear: {
        position: 'absolute',
        borderTopWidth: 20, 
        borderRightWidth: 20,
        borderTopColor: Colours.GREEN,
        borderRightColor: 'transparent',
        opacity: 0.5,
    },
});