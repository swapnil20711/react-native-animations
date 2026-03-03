import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedProps, useAnimatedRef, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

// useDerivedValue
// useAnimatedRef
// useAnimatedProps
// createAnimatedComponent

const AnimatedView = Animated.createAnimatedComponent(View)

const Hooks = () => {
    const progress = useSharedValue(0);
    const animatedRef = useAnimatedRef();
    const borderRadius = useDerivedValue(()=>{
        return 10 + progress?.value*200
    })
    const animatedProps = useAnimatedProps(()=>{
        return{borderRadius:borderRadius.value}
    })
    const [value,setValue] = useState<any>(null);

    useEffect(()=>{
        progress.value = withRepeat(withTiming(1,{duration:500,easing:Easing.linear}),Infinity,true)
    },[])

    // useEffect(() => {
    //     setTimeout(() => {
    //       runOnUI(() => {
    //         'worklet';
    //         const layout = measure(animatedRef);
    //         setValue(layout)
    //         console.log(layout);
    //       })();
    //     }, 100);
    //   }, []);
      
    return (
        <View style={styles.container}>
            <AnimatedView ref={animatedRef} style={styles.box} animatedProps={animatedProps}></AnimatedView>
            {/* <Text>{JSON.stringify(value,null,2)}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    box:{
        width:100,
        height:100,
        backgroundColor:"blue"
    }
})

export default Hooks