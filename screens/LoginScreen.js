import React, { Component } from 'react';
import { StyleSheet,
        Text,
        TextInput,
        View,
        TouchableOpacity,
        AsyncStorage,
        AppRegistry,
} from 'react-native';


export default class LoginScreen extends Component {
    static navigationOptions = {
        title: "Login",
    }
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        };

    }
    async onLoginPress() {
        const {email, password} = this.state;
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        this.props.navigation.navigate('AccList');
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.body}>

                <TextInput
                    placeholder="username"
                    placeholderTextColor="black"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    value={this.state.userName}
                    onChangeText={userName => this.setState({userName})}
                    style={styles.input}
                />

                <TextInput
                    placeholder="password"
                    placeholderTextColor="black"
                    secureTextEntry
                    ref={input =>(this.passwordInput = input)}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={ this.onLoginPress.bind(this)}
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={ ()=> navigate('HomeScreen') }>
                    <Text style={styles.btnText}>Go Home</Text>
                </TouchableOpacity>




            </View>
        );
    }

};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#1abc9c",
        padding: 20,
        paddingTop:20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,

    },
    btnContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 15,
        marginBottom:15
    },
    btnText: {
        textAlign:'center',
        fontWeight: 'bold',

    }

});
