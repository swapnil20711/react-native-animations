import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withClamp, withDecay, withDelay, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';

const Method = () => {
    const translateX = useSharedValue(0); //V
    const animatedStyle = useAnimatedStyle(() => {
        return ({
            //C 
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
                translateX.value = withDecay({ velocity: 200, deceleration: 0.98 })
            }}></Button>

            <Button title='withSequence' onPress={() => {
                translateX.value = withSequence(withTiming(200, { duration: 500 }), withTiming(-200, { duration: 500 }))
            }}></Button>

            <Button title='withRepeat' onPress={() => {
                translateX.value = withRepeat(withTiming(200, { duration: 500 }), 3, true)
            }}></Button>

            <Button title='withDelay' onPress={() => {
                translateX.value = withDelay(1000, withTiming(200, { duration: 500 }))
            }}></Button>

            <Button title='withClamp' onPress={() => {
                translateX.value = withClamp({min:-200,max:200},withTiming(500,{duration:500}))
            }}></Button>
        </View>
    )
}

export default Method