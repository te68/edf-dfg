import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Search Page </Text>

            <BottomButton navigation={navigation} />

        </View>
    );
};

SearchScreen.navigationOptions = ({ navigation }) => {
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
    }
});

export default SearchScreen;