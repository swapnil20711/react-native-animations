import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, useAnimatedValue, View } from 'react-native'

// Pan responsder , event
const Event = () => {
    const pan = useRef(new Animated.ValueXY({x:0,y:0})).current
    const scale = useAnimatedValue(1)

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onPanResponderGrant:()=>{
            Animated.spring(scale,{
                toValue:1.2,
                useNativeDriver:true
            }).start()
        },
        onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }]
        ),
        onPanResponderRelease(e, gestureState) {
            Animated.parallel([
                Animated.spring(pan,{
                    toValue:{x:0,y:0},
                    useNativeDriver:true
                }),
                Animated.spring(scale,{
                    toValue:1,
                    useNativeDriver:true
                })
            ]
            ).start();
        },
    })).current

    return (
        <View style={styles.container}>
            <Animated.View {...panResponder.panHandlers} style={[styles.box,{transform:[...pan.getTranslateTransform(),{scale}]}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        width:100,
        height:100,
        backgroundColor:"orange",
        borderRadius:10
    }
})

export default Event