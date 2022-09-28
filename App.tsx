import {LinearGradient} from 'expo-linear-gradient';
import React, {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Color from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  const gameHoverHandler = () => {
    setGameIsOver(true);
  };

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameHoverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Color.primary700, Color.accent500]}>
      <ImageBackground
        source={require('./assets/images/dices.jpg')}
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
        resizeMode={'cover'}>
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
