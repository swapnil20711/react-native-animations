import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const FirstAnimation = () => {
    const width = useSharedValue(100);
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Animated.View style={{ width, height: 100,backgroundColor:'violet' }}></Animated.View>
            <Button onPress={() => {
                width.value = withSpring(Math.random() * 100 + 50)
            }} title='Animate'></Button>
        </View>
    )
}

export default FirstAnimation