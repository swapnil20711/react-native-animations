import React from 'react';
import {
    Animated,
    Easing,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useAnimatedValue,
    View
} from 'react-native';

const EasingAnimation = () => {
    const animatedValue = useAnimatedValue(0);

    const startAnimation = (easingFunction: (value: number) => number) => {
        animatedValue.setValue(0);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 2000,
            easing: easingFunction,
            useNativeDriver: true
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        transform: [
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 200]
                                })
                            }
                        ]
                    }
                ]}
            />

            <ScrollView style={{ paddingHorizontal: 20 }}>
                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.step0)}
                >
                    <Text style={styles.buttonText}>Step0</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.step1)}
                >
                    <Text style={styles.buttonText}>Step1</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.linear)}
                >
                    <Text style={styles.buttonText}>Linear</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.ease)}
                >
                    <Text style={styles.buttonText}>Ease</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.quad)}
                >
                    <Text style={styles.buttonText}>Quad</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.cubic)}
                >
                    <Text style={styles.buttonText}>Cubic</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.poly(4))}
                >
                    <Text style={styles.buttonText}>Poly (n=4)</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.sin)}
                >
                    <Text style={styles.buttonText}>Sin</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.circle)}
                >
                    <Text style={styles.buttonText}>Circle</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.exp)}
                >
                    <Text style={styles.buttonText}>Exp</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.elastic(1))}
                >
                    <Text style={styles.buttonText}>Elastic</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.back(1))}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
                 <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.bounce)}
                >
                    <Text style={styles.buttonText}>Bounce</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.bezier(0.42,0,1,1))}
                >
                    <Text style={styles.buttonText}>Beizer</Text>
                </Pressable>

                 <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.in(Easing.quad))}
                >
                    <Text style={styles.buttonText}>In(quad)</Text>
                </Pressable>

                 <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.out(Easing.quad))}
                >
                    <Text style={styles.buttonText}>Out(quad)</Text>
                </Pressable>

                 <Pressable
                    style={styles.button}
                    onPress={() => startAnimation(Easing.inOut(Easing.quad))}
                >
                    <Text style={styles.buttonText}>Inout(quad)</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        gap: 10
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        marginVertical: 20
    },
    button: {
        backgroundColor: "#4A90E2",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 12
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    }
});

export default EasingAnimation;