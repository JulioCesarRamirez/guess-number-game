import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Color from '../../constants/colors';

type Props = {
  children: string;
};

const Title = ({children}: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Color.white,
    padding: 12,
  },
});
