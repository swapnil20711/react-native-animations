import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// V C F

const Value = () => {
    const position1 = useAnimatedValue(0);
    const position2 = useAnimatedValue(201);

    const position3 = Animated.add(position1, position2);
    const position4 = Animated.subtract(position1, position2);
    const position5 = Animated.multiply(position1, position2);
    const position6 = Animated.divide(position1, position2);
    const position7 = Animated.modulo(position2, 1);

    const basePosition = useAnimatedValue(50);
    const oscillation = useAnimatedValue(0);

    const combined = Animated.add(basePosition, oscillation);

    // const position = useRef(new Animated.Value(0)).current;
    const xyValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;


    const startAnimation = (() => {
        Animated.timing(position1, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(position1, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false
            }).start();
        });
    })

    const startXYAnimation = () => {
        Animated.timing(xyValue, { toValue: { x: 500, y: 500 }, duration: 5000, useNativeDriver: false }).start();
    }

    const startOscillation = (() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(oscillation, {
                    toValue: 50,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(oscillation, {
                    toValue: -50,
                    duration: 1000,
                    useNativeDriver: true
                })
            ]), { iterations: 3 } // For infinity loop pass infinity
        ).start();
    })

    useEffect(() => {
        startAnimation();
        startOscillation();
        // startXYAnimation();
    }, [])
    return (
        <View style={{ flexDirection: "column", flex: 1 }}>
            {/* <Animated.View style={[styles.box, { marginLeft: position7 }]}></Animated.View> */}
            {/* <Animated.View style={[styles.box2, {transform:xyValue.getTranslateTransform()}]}></Animated.View> */}
            <Animated.View style={[styles.circle, { transform: [{ translateX: combined }] }]}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 150,
        backgroundColor: "yellow"
    },
    box2: {
        width: 150,
        height: 150,
        backgroundColor: "orange",
        marginTop: 20
    },
    circle: {
        width: 150,
        height: 150,
        backgroundColor: "blue",
        marginTop: 20,
        borderRadius: 200
    }
})

export default Value