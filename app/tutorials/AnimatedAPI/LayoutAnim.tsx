import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// resizing, adding, removing views
const LayoutAnim = () => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = ()=>{
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        // LayoutAnimation.spring();
        // LayoutAnimation.easeInEaseOut();
        setExpanded(!expanded)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={toggleExpand}>
                <Text style={styles.buttonText}>{expanded ? 'Collapse' : 'Expand'}</Text>
            </TouchableOpacity>

            {expanded && (
                <View style={styles.box}>
                    <Text>
                        This box expands and collapses
                    </Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: "white",
        fontSize: 16
    },
    box: {
        marginTop: 14,
        width: 200,
        height: 200,
        backgroundColor: "lightgray",
        justifyContent: "center"
    }
})

export default LayoutAnim