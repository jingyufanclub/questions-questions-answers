import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Firework from '../components/Firework';
import commonStyles from '../styles/common.styles';

function Result({route, navigation}: any): React.ReactElement {
  const {score} = route.params;
  const opacity = new Animated.Value(0);
  const scale = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(250),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1.4,
          tension: 90,
          friction: 3,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  });

  return (
    <View style={commonStyles.parentView}>
      <Text style={commonStyles.header}>Your Score</Text>
      <Firework />
      <View style={styles.container}>
        <Animated.Text
          style={[
            commonStyles.header,
            styles.score,
            {
              opacity: opacity,
              transform: [{scale: scale}],
            },
          ]}>
          {score}
        </Animated.Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text style={commonStyles.text}>BEGIN AGAIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  score: {
    fontSize: 150,
  },
});

export default Result;
