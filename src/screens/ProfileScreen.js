import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Profile></Profile>
            <Interests></Interests>
            <Text style={styles.title}> Notifications</Text>
            <Text style={styles.title}> Saved Content </Text>
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

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employment: "",
            education: "",
        }
    }
    render() {
        return <View style={styles.container}>
            <Text style={styles.title}> Profile </Text>
            <Text style={styles.textSettings}> Email: </Text>
            <Text style={styles.textSettings}> Location: </Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={
                    [styles.settingsLeft, { backgroundColor: this.state.employment == "Seeking Employment" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    employment: "Seeking Employment"
                })}>
                    <Text style={styles.textSettings}> Seeking Employment </Text>
                </TouchableOpacity>
                <TouchableOpacity style={
                    [styles.settingsRight, { backgroundColor: this.state.employment == "Employed Full Time" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    employment: "Employed Full Time"
                })}>
                    <Text style={styles.textSettings}> Employed Full Time </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={
                    [styles.settingsLeft, { backgroundColor: this.state.education == "Student" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    education: "Student"
                })}>
                    <Text style={styles.textSettings}> Student </Text>
                </TouchableOpacity>
                <TouchableOpacity style={
                    [styles.settingsRight, { backgroundColor: this.state.education == "Graduate" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    education: "Graduate"
                })}>
                    <Text style={styles.textSettings}> Graduate </Text>
                </TouchableOpacity>
            </View>
        </View>;
    }

}

class Interests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            climateNews: "",
            corporateInsights: "",
            climateAdvocacy: "",
            sustainabilityResearch: "",
        }
    }
    render() {
        return <View style={styles.container}>
            <Text style={styles.title}> Interests </Text>
            <Text style={styles.interestSettings}> Climate News: </Text>
            <Text style={styles.textSettings}> Corporate Insights: </Text>
            <Text style={styles.textSettings}> Climate Advocacy: </Text>
            <Text style={styles.textSettings}> Sustainability Research: </Text>
        </View >
    }
}

class DegreeInterest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: ""
        }
    }
    render() {
        return <View style={styles.buttons}>
            <TouchableOpacity style={
                [styles.smallButton, { backgroundColor: this.state.degree == "A Little" ? "#7cfc00" : "#ffffff" }]
            } onPress={() => this.setState({
                degree: "A Little"
            })}>
                <Text style={styles.textSettings}> A Little </Text>
            </TouchableOpacity>
            <TouchableOpacity style={
                [styles.smallButton, { left: "30%", backgroundColor: this.state.degree == "Average" ? "#7cfc00" : "#ffffff" }]
            } onPress={() => this.setState({
                degree: "Average"
            })}>
                <Text style={styles.textSettings}> Average </Text>
            </TouchableOpacity>
            <TouchableOpacity style={
                [styles.smallButton, { left: "50%", backgroundColor: this.state.degree == "A Lot" ? "#7cfc00" : "#ffffff" }]
            } onPress={() => this.setState({
                degree: "A Lot"
            })}>
                <Text style={styles.textSettings}> A Lot </Text>
            </TouchableOpacity>
        </View>
    }
}

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
    title: {
        fontWeight: "bold",
        fontSize: 30,
        flex: 1.1,
        left: "4%"
    },
    logo: {
        fontWeight: "bold",
        fontSize: 18,
    },
    textSettings: {
        fontSize: 12,
        alignContent: "center",
        left: "5%",
        flex: 1
    },
    interestSettings: {
        flexDirection: "row",
        fontSize: 12,
        alignContent: "center",
        left: "10%",
        flex: 1
    },
    signOut: {
        position: "absolute",
        bottom: 75,
        width: "100%",
        backgroundColor: "#7cfc00",
        borderRadius: 25,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
    },
    settingsLeft: {
        width: "35%",
        left: "10%",
        borderRadius: 25,
        height: 24,
    },
    settingsRight: {
        width: "35%",
        left: "50%",
        borderRadius: 25,
        height: 24,
    },
    buttons: {
        flexDirection: "row",
        flex: .8,
        left: "10%"
    },
    smallButton: {
        width: "15%",
        left: "10%",
        borderRadius: 25,
        height: 24,
    }
});

export default ProfileScreen;