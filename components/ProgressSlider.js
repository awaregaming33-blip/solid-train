import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export const ProgressSlider = ({ percentage }) => {
  const animatedValue = useRef(new Animated.Value(percentage)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [animatedValue, percentage]);

  const widthInterpolation = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{Math.round(percentage)}% Complete</Text>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, { width: widthInterpolation }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24
  },
  label: {
    color: '#333333',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  track: {
    backgroundColor: '#E8EDF2',
    borderRadius: 999,
    height: 14,
    overflow: 'hidden',
    width: '100%'
  },
  fill: {
    backgroundColor: '#4A90E2',
    borderRadius: 999,
    height: '100%'
  }
});
