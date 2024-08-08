import React, { Component } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import Colours from '../../hooks/Colours';

interface CustomTextProps {
  children?: React.ReactNode;
  textType?: 'Manrope-ExtraLight' | 'Manrope-Light' | 'Manrope-Regular' | 'Manrope-Medium' | 'Manrope-SemiBold' | 'Manrope-Bold' | 'Manrope-ExtraBold' | 'LeagueSpartan-ExtraLight' | 'LeagueSpartan-Light' | 'LeagueSpartan-Regular' | 'LeagueSpartan-Medium' | 'LeagueSpartan-SemiBold' | 'LeagueSpartan-Bold' | 'LeagueSpartan-ExtraBold' | 'LeagueSpartan-Black';
  textSize?: 11 | 15 | 16 | 21 | 36;
  style?: TextStyle | TextStyle[];
}

class CustomText extends Component<CustomTextProps> {
  static defaultProps = {
    textType: 'Manrope-Light',
    textSize: 16,
  };

  render() {
    const { children, textType, textSize, style} = this.props;
    return (
      <Text style={[styles.defaultStyle, style, { fontFamily: textType, fontSize: textSize }]}>
        {/* `Manrope-${textType}` */}        
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: Colours.BLACK,
    letterSpacing: 0.1,
    lineHeight: 20,

    textAlign: 'left',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});

export default CustomText;
