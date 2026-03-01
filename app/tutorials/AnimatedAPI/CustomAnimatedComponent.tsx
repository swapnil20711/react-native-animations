import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, useAnimatedValue } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const CustomAnimatedComponent = () => {
  const scaleValue = useAnimatedValue(1);

  const handlePressIn = ()=>{
    Animated.spring(scaleValue,{
      toValue:0.9,
      useNativeDriver:true
    }).start();
  }

  const handlePressOut = ()=>{
    Animated.spring(scaleValue,{
      toValue:1,
      useNativeDriver:true
    }).start();
  }
  return (
    <AnimatedTouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.button,{transform:[{scale:scaleValue}]}]}>
      <Text style={styles.text}>Press me!</Text>
    </AnimatedTouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:16,
    fontWeight:"600",
    color:"white"
  },
  button:{
    width:120,
    marginTop:10,
    alignSelf:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:"center",
    backgroundColor:"blue",
    padding:10,
    borderRadius:10,
    marginHorizontal:10
  }
})

export default CustomAnimatedComponent