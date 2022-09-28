import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import Color from '../../constants/colors';
interface Props {
  children: string;
  onPressed: () => void;
}
const PrimaryButton = ({children, onPressed}: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressed}
        android_ripple={{color: Color.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Color.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
