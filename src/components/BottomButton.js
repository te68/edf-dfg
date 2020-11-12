import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const BottomButton = ({ navigation }) => {
    return (
        <View style={styles.viewStyle} >
            <TouchableOpacity style={styles.touchStyle} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textStyle}>Learn</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchStyle} onPress={() => navigation.navigate('Connect')} >
                <Text style={styles.textStyle}>Connect</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchStyle} onPress={() => navigation.navigate('Act')} >
                <Text style={styles.textStyle}>Act</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
        flex: 1,
        position: 'absolute',
        bottom: 0,
    },
    touchStyle: {
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 65
    },
    textStyle: {
        fontSize: 24,
        textAlign: 'center'
    }
});

export default BottomButton;