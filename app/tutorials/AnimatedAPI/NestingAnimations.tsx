import React, { useEffect } from 'react';
import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// loop,parallel,stagger,delay,sequence
const NestingAnimations = () => {
    const animValue1 = useAnimatedValue(0);
    const animValue2 = useAnimatedValue(0);

    useEffect(() => {
        const sequenceAnimation = Animated.sequence([
            Animated.timing(animValue1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(animValue2, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
        ]);

        const parallelAnimation = Animated.parallel([
            Animated.timing(animValue1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(animValue2, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
        ]);

        const staggerAnimation = Animated.stagger(5000, [
            Animated.timing(animValue1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(animValue2, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
        ]);

        const loopAnimation = Animated.loop(
            // Animated.timing(animValue1, {
            //     toValue: 1,
            //     duration: 1000,
            //     useNativeDriver: true
            // }), { iterations: 5 }
            Animated.sequence([
                Animated.timing(animValue1, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(animValue2, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }),
            ]),
            { iterations: 5 }
        );

        // same as staggered
        const delayedAnimation = Animated.sequence([
            Animated.timing(animValue1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.delay(1000),
            Animated.timing(animValue2, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
        ]);

        // parallelAnimation.start();
        // sequenceAnimation.start();
        // staggerAnimation.start();
        // loopAnimation.start();
        delayedAnimation.start();
    }, [])
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { opacity: animValue1 }]} />
            <Animated.View style={[styles.box, { backgroundColor: "blue", opacity: animValue2 }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        margin: 10
    }
})

export default NestingAnimations