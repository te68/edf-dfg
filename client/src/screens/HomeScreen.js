import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Home Page </Text>

            <TouchableOpacity style={styles.searchStyle} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.textStyle}>Search All </Text>
                <FontAwesome style={styles.arrowStyle} name="arrow-right" />
            </TouchableOpacity>

            <BottomButton navigation={navigation} />

        </View>
    );
};

HomeScreen.navigationOptions = ({ navigation }) => {
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
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    arrowStyle: {
        fontSize: 18,
    },
    searchStyle: {
        flexDirection: "row",
        alignItems: "center",
        position: 'absolute',
        bottom: 75,
        right: 10
    }
});

export default HomeScreen;