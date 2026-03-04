import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { scrollTo, SharedValue, useAnimatedRef, useDerivedValue, useSharedValue } from 'react-native-reanimated';

const ITEM_MARGIN = 10;
const ITEM_SIZE = 100;
const ITEM_COUNT = 10;

const ScrollTo = () => {
  const items = Array.from({length:ITEM_COUNT}).map((_,index)=>index);
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scroll = useSharedValue<number>(0);
  useDerivedValue(()=>{
    // console.log(scroll.value)
    // console.log(ITEM_SIZE*2+ITEM_MARGIN)
    // console.log(scroll.value*(ITEM_SIZE*2+ITEM_MARGIN))
    scrollTo(animatedRef,0,scroll.value*(ITEM_SIZE+2*ITEM_MARGIN),true)
  })

  

  return (
    <View style={styles.container}>
      <Incrementor scroll={scroll} increment={-1}/>
      
      <View style={styles.scrollContainer}>
        <Animated.ScrollView ref={animatedRef}>
          {items.map((i)=>
          <View key={i} style={styles.box}>
            <Text style={styles.boxText}>{i}</Text>
          </View>)}
        </Animated.ScrollView>
      </View>
      <Incrementor scroll={scroll} increment={1}/>
    </View>
  )
}

const Incrementor=({increment,scroll}:{increment:number,scroll:SharedValue<number>})=>{
  return(
    <View style={styles.buttonWrapper}>
      <Button title={`Scroll ${Math.abs(increment)} ${increment>0?'down':'up'}`} onPress={()=>{
        scroll.value = (scroll.value+ITEM_COUNT+increment)%ITEM_COUNT
      }}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center"
  },
  buttonWrapper:{
    marginBottom:20
  },
  scrollContainer:{
    width:"100%",
    height:250,
    alignItems:"center"
  },
  box:{
    width:ITEM_SIZE,
    height:ITEM_SIZE,
    margin:ITEM_MARGIN,
    borderRadius:15,
    backgroundColor:"#b58df1",
    alignItems:"center",
    justifyContent:'center'
  },
  boxText:{
    textAlign:"center"
  }
})

export default ScrollTo