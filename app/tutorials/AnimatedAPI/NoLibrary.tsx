import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const NoLibrary = () => {
    const [position, setPosition] = useState(0);

    // useEffect(() => {
    //     const interval: ReturnType<typeof setInterval> = setInterval(() => {
    //         setPosition((prev) => prev < 200 ? prev + 5 : 0)
    //     }, 10)
        
    //     return ()=>clearInterval(interval);
    // }, [])
    return (
        <View>
        <View style={[styles.box,{marginLeft:position}]}></View>
        <View style={[styles.box,{marginLeft:position}]}></View>
        <View style={[styles.box,{marginLeft:position}]}></View>
        <View style={[styles.box,{marginLeft:position}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 150,
        backgroundColor: "yellow"
    }
})

export default NoLibrary