import React, { useEffect, useRef } from 'react';
import { Animated, Easing, PanResponder, StyleSheet, useAnimatedValue, View } from 'react-native';

const Interpolation = () => {
    const animatedValue = useAnimatedValue(0);
    const pan = useRef(new Animated.ValueXY()).current;
    const diffClampY = useRef(Animated.diffClamp(pan.y, -100, 100)).current
    const diffClampX = useRef(Animated.diffClamp(pan.x, -100, 100)).current
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }],
            { useNativeDriver: false } // must be false when using diffClamp
        ),
        onPanResponderRelease: () => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false
            }).start();
        }
    })
    const startInterpolation = () => {
        Animated.timing(animatedValue, {
            toValue: 5,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        startInterpolation();
    }, [])

    return (
        <View style={styles.container}>
            {/* <Animated.View
                style={[styles.box, {
                    transform: [{
                        translateX: animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-200, 200],
                            extrapolateRight:"extend",
                            extrapolateLeft:'clamp'
                        })
                    }]
                }]}></Animated.View> */}

            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.box2, { transform: [{ translateY: diffClampY }, { translateX: diffClampX }] }]}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 120,
        backgroundColor: "red"
    },
    box2: {
        width: 100,
        height: 100,
        borderRadius: 120,
        backgroundColor: "blue",
        marginTop: 20
    }
})


export default Interpolation