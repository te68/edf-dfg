import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const ConnectScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Connect Page </Text>

            <BottomButton navigation={navigation} />

        </View>
    );
};

ConnectScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Image style={styles.icon} source={require('../../assets/edf.jpg')} />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons style={styles.profile} name="md-person" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10
    },
    profile: {
        fontSize: 30,
        marginRight: 10
    }
});

export default ConnectScreen;