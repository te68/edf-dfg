import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.searchStyle} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.textStyle}>Search All </Text>
                <FontAwesome style={styles.arrowStyle} name="search" />
            </TouchableOpacity>
            <View style={styles.row}>
                <Button title="Articles" notifications={1}></Button>
                <Button title="Podcasts" notifications={3} color = "#6EC6B3"></Button>
            </View> 
            <View style={styles.row}>
                <Button title="Blogs" notifications={1} color="#C5DB65" ></Button>
                <Button title="Career Advice" notifications={1} ></Button>
                <Button title="Videos" notifications={1} color="#C5DB65" ></Button>
            </View>
            <View style={styles.row}>
                <Button title="Events" notifications={2} color="#F7F6F1"></Button>
                <Button title="Authenticity Meter" notifications={2} color="#6EC6B3"></Button>
            </View>
            <View style={styles.row}>
                <Button title="Guides" notifications={2}></Button>
                <Button title="Resources" notifications={1} color="#C5DB65"></Button>
            </View>
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

function Button(props) {
    const notifs = Math.min(props.notifications, 3);

    return <TouchableOpacity style={[styles.button, {
        backgroundColor: props.color == null ? "#1B8AE6" : props.color, 
        borderRadius: 25+ notifs*25,
        width: 50+ notifs *50,
        height: 50+ notifs *50,
    }]}> 
        <Text style={{
            fontSize: props.title.length > Math.max(5*notifs, 10) ? 5+ 10* notifs: 10 + notifs * 10,
            textAlign: "center"
        }}> {props.title}</Text>
            </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        borderRadius: 50,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)', 
        shadowOffset: { height: 4, width: 4 }, 
        shadowOpacity: 1, 
        shadowRadius: 1,
        margin: 10
    },
    row: {
        flexDirection: "row", 
        alignItems:'center',
        justifyContent: 'center',
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