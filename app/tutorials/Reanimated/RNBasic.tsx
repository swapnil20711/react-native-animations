import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const RNBasic = () => {
  const width = useSharedValue(100);

  const handlePress = ()=>{
    width.value = withSpring(width.value+50,{duration:1000});
  }
  
  return (
    <View>
      <Animated.View
        style={{ backgroundColor: "violet", width, height: 100 }}
      />
      <Button onPress={handlePress} title='Click'></Button>
    </View>
  )
}

export default RNBasic