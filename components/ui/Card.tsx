import React from 'react';
import {StyleSheet, View} from 'react-native';
import Color from '../../constants/colors';
interface Props {
  children: JSX.Element[];
}
const Card = ({children}: Props) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary800,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 24,
    marginTop: 40,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
