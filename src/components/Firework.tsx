import React, {useRef, useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const firework = require('../assets/animations/firework.json');

function Firework(): React.ReactElement {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5500,
      delay: 600,
      easing: Easing.bezier(0.22, 0.73, 0.64, -0.13),
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View
      style={{
        opacity: progress.interpolate({
          inputRange: [0, 0.5, 0.8, 1],
          outputRange: [1, 1, 0.9, 0],
        }),
      }}>
      <LottieView
        progress={progress}
        source={firework}
        style={styles.animation}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animation: {
    alignSelf: 'center',
    width: 300,
    height: 600,
  },
});

export default Firework;
