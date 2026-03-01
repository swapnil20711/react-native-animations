import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated';

const Method = () => {
    const translateX = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return ({
            transform: [{ translateX: translateX.value }]
        })
    })
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Animated.View style={[{ backgroundColor: "blue", width: 100, height: 100 }, animatedStyle]} />

            <Button title='withTiming' onPress={() => {
                translateX.value = withTiming(200, { duration: 1000 })
            }}></Button>

            <Button title='withSpring' onPress={() => {
                translateX.value = withSpring(200, { damping: 10, stiffness: 100 })
            }}></Button>

<Button title='withDecay' onPress={() => {
                translateX.value = withDecay({ velocity: 200, deceleration:0.98 })
            }}></Button>
        </View>
    )
}

export default Method