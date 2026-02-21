import React, { useEffect } from 'react';
import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

const AnimTypes = () => {
    // VCF 
    // Decay Spring Times
    const springValue = useAnimatedValue(0);
    const decayValue = useAnimatedValue(0);
    const timingValue = useAnimatedValue(0);
    const animatedX = decayValue.interpolate({
        inputRange:[0,100],
        outputRange:[0,400]
    })
    const animatedSpringX = {
        transform:[
            {
                translateX:springValue.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,200]
                }) 
            }
        ]
    }

    const animatedTimingX = {
        transform:[
            {
                translateX:timingValue.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,200]
                }) 
            }
        ]
    }

    const startDecay = ()=>{
        Animated.decay(decayValue,{
            velocity:2,
            deceleration:0.9,
            useNativeDriver:true
        }).start();
    }

    const startSpring = ()=>{
        Animated.spring(springValue,{
            toValue:1,
            friction:5,
            tension:40,
            useNativeDriver:true
        }).start();
    }

     const startTiming = ()=>{
        Animated.timing(timingValue,{
            toValue:1,
            duration:2000,
            // easing:Easing.,
            useNativeDriver:true
        }).start();
    }


    useEffect(()=>{
        startDecay()
        startSpring()
        startTiming()
    },[])
    return (
        <View>
            <Animated.View style={[styles.box1,{transform:[{translateX:animatedX}]}]}/>
            <Animated.View style={[styles.box2,animatedSpringX]}/>
            <Animated.View style={[styles.box3,animatedTimingX]}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: "orange"
    },
    box2: {
        width: 100,
        height: 100,
        marginVertical:15,
        backgroundColor: "yellow"
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: "green"
    }
})


export default AnimTypes