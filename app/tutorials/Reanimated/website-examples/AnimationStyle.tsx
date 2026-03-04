import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const AnimationStyle = () => {
    const translateX = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(()=>({
        transform:[{translateX:translateX.value*3}]
    }))
    const handlePress = () => {
        translateX.value += 50;
      };
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Animated.View style={[{ width:100, height: 100,backgroundColor:'violet' },animatedStyle]}></Animated.View>
            <Button onPress={handlePress} title='Animate'></Button>
        </View>
    )
}

export default AnimationStyle