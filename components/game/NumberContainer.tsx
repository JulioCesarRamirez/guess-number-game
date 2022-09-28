import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Color from '../../constants/colors';

interface Props {
  children: number;
}

const NumberContainer = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Color.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
