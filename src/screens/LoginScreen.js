import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Youth4Change</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value={username}
            onChangeText={text => setUsername(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} 
        onPress={(value) => {
          if (true) {
            navigation.navigate('Home')
          } else {
            alert("Incorrect Username or Password");
          }
        }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#6495ed",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#7cfc00",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black",
    fontWeight: "bold"
  }
});

export default LoginScreen;