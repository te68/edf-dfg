import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import BottomButton from '../components/BottomButton';

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 5 }}>
                <Profile style={{ flex: 1 }}></Profile>
                <Interests style={{ flex: 1 }}></Interests>
                <Notifications style={{ flex: 1 }}></Notifications>
                <Text style={styles.title}> Saved Content </Text>
            </ScrollView>
            <TouchableOpacity style={styles.signOut} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.logo}>Sign out</Text>
            </TouchableOpacity>
            <BottomButton navigation={navigation} />
        </SafeAreaView>

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
                    <Text style={{ textAlign: "center" }}> Seeking Employment </Text>
                </TouchableOpacity>
                <TouchableOpacity style={
                    [styles.settingsRight, { backgroundColor: this.state.employment == "Employed Full Time" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    employment: "Employed Full Time"
                })}>
                    <Text style={{ textAlign: "center" }}> Employed Full Time </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={
                    [styles.settingsLeft, { backgroundColor: this.state.education == "Student" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    education: "Student"
                })}>
                    <Text style={{ flex: 1, justifyContent: "center", textAlign: "center" }}> Student </Text>
                </TouchableOpacity>
                <TouchableOpacity style={
                    [styles.settingsRight, { backgroundColor: this.state.education == "Graduate" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    education: "Graduate"
                })}>
                    <Text style={{ textAlign: "center" }}> Graduate </Text>
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
            <View style={{ flexDirection: "row" }}>
                <View style={[styles.container, { top: 8, left: 11 }]}>
                    <Text style={styles.textSettings}> Climate News: </Text>
                    <Text style={styles.textSettings}> Corporate Insights: </Text>
                    <Text style={styles.textSettings}> Climate Advocacy: </Text>
                    <Text style={styles.textSettings}> Sustainability Research: </Text>
                </View>
                <View style={{ flex: 1.3 }}>
                    <DegreeInterest> </DegreeInterest>
                    <DegreeInterest></DegreeInterest>
                    <DegreeInterest></DegreeInterest>
                    <DegreeInterest></DegreeInterest>
                </View>
            </View>
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

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify: "On"
        }
    }
    render() {
        return <View>
            <Text style={styles.title}> Notifications</Text>
            <View style={[styles.buttons, { top: "0%" }]}>
                <TouchableOpacity style={
                    [styles.smallButton, { left: 10, backgroundColor: this.state.notify == "On" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    notify: "On"
                })}>
                    <Text style={{ flex: 1, justifyContent: "center", textAlign: "center" }}> On </Text>
                </TouchableOpacity>
                <TouchableOpacity style={
                    [styles.smallButton, { left: 20, backgroundColor: this.state.notify == "Off" ? "#7cfc00" : "#ffffff" }]
                } onPress={() => this.setState({
                    notify: "Off"
                })}>
                    <Text style={{ textAlign: "center" }}> Off </Text>
                </TouchableOpacity>
            </View>
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
        margin: "5%",
        fontSize: 30,
        flex: 1,
    },
    logo: {
        fontWeight: "bold",
        fontSize: 18,
    },
    textSettings: {
        fontSize: 14,
        alignContent: "center",
        left: "5%",
        top: "5%",
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
        flex: 1,
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
        height: 20,
    },
    settingsRight: {
        width: "35%",
        left: "50%",
        borderRadius: 25,
        height: 20,
    },
    buttons: {
        flexDirection: "row",
        padding: 4,
        flex: 1,
        left: "10%",
        top: "3%",
    },
    smallButton: {
        width: "28%",
        left: "10%",
        borderRadius: 25,
        height: 20,
    }
});

export default ProfileScreen;