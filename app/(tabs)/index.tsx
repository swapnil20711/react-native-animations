
import { ThemedText } from '@/components/themed-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimationProps from '../tutorials/Reanimated/website-examples/AnimationProps';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
        <ThemedText type="title" style={{justifyContent:"center",textAlign:"center",marginTop:20}}>Animations</ThemedText>
        {/* Animated API */}
        {/* <NoLibrary/> */}

        {/* <Basics/> */}

        {/* <Value/> */}

        {/* <Interpolation/> */}
        {/* <AnimTypes/> */}
        {/* <FadeInView/> */}
        {/* <EasingAnimation/> */}
        {/* <NestingAnimations/> */}
        {/* <Event/> */}
        {/* <CustomAnimatedComponent/> */}
        {/* <LayoutAnim/> */}
        {/* <ScrollEvent/> */}
        {/* Reanimated */}
        {/* <RNBasic/> */}
        {/* <Method/> */}
        {/* <Hooks/> */}
        {/* <ScrollHandler/> */}
        {/* <ScrollTo/> */}
        {/* <FirstAnimation/> */}
        {/* <AnimationStyle/> */}
        <AnimationProps/>
      </SafeAreaView>
  );
}


