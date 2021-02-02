import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Profile Page </Text>

            <BottomButton navigation={navigation} />
            <TouchableOpacity style={styles.signOut} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.logo}>Sign out</Text>
            </TouchableOpacity>

        </View>
    );
};

ProfileScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign style={styles.profileLeft} name="back" />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons style={styles.profileRight} name="md-person" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileLeft: {
        fontSize: 30,
        marginLeft: 10
    },
    profileRight: {
        fontSize: 30,
        marginRight: 10
    },
    logo:{
        fontWeight:"bold",
        fontSize:18
    },
    signOut: {
        position: "absolute",
        bottom: 75,
        width:"100%",
        backgroundColor:"#7cfc00",
        borderRadius: 25,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default ProfileScreen;