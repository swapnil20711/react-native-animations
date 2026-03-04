import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimationProps = () => {
  const r = useSharedValue(20);

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  const handlePress =()=>{
    r.value+=10;
  }

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%">
        <AnimatedCircle
          cx="50%"
          cy="50%"
          animatedProps={animatedProps}
          fill="blue"
        />
      </Svg>
      <Button title='Animate' onPress={handlePress}></Button>
    </View>
  );
};

export default AnimationProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});