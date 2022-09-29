import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Color from '../../constants/colors';

interface Props {
  roundNumber: number;
  guess: number;
}

const GuessLogItem = ({roundNumber, guess}: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Color.primary800,
    borderWidth: 1,
    borderRadius: 40,
    marginVertical: 8,
    padding: 12,
    backgroundColor: Color.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    textShadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
