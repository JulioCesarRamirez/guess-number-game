import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import Color from '../../constants/colors';
interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}
const InstructionText = ({children, style}: Props) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
  },
});
