import React, { useEffect } from 'react';
import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

const FadeInView = () => {
    const fadeAnim = useAnimatedValue(0);

    const startFadingAnimation = ()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:10000,
            useNativeDriver:true
        }).start();
    }

    useEffect(()=>{
        startFadingAnimation();
    },[])
  return (
    <View>
      <Animated.View style={[styles.box,{opacity:fadeAnim}]}/>
    </View>
  )
}
const styles = StyleSheet.create({
  box:{
    width:200,
    height:200,
    borderRadius:400,
    backgroundColor:"blue"
  }
})


export default FadeInView