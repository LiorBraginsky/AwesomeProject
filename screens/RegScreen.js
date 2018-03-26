import React, { Component }from "react";
import {StyleSheet,
        Text,
        TextInput,
        View,
        TouchableOpacity,
        AsyncStorage,
        AppRegistry} from 'react-native';

export default class RegScreen extends Component {
    static navigationOptions = {
        title: "Registration",
    }
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',

        }
    }
    async onRegisterPress() {
        const {userName, email, password} = this.state;
        await AsyncStorage.setItem('email',email);
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('password', password);
        this.props.navigation.navigate('AccList');
    }



    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={styles.body}>
                <TextInput
                    value = {this.state.email}
                    onChangeText={email =>  this.setState({email})}
                    placeholder="Input your email"
                    placeholderTextColor="black"
                    style={styles.input}
                />

                <TextInput
                    value = {this.state.userName}
                    onChangeText={userName =>  this.setState({userName})}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    placeholder="Input your UserName"
                    placeholderTextColor="black"
                    style={styles.input}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={password =>  this.setState({password})}
                    placeholder="Input your password"
                    placeholderTextColor="black"
                    secureTextEntry
                    style={styles.input}

                />

                <TouchableOpacity
                    onPress={ this.onRegisterPress.bind(this)}
                    style={styles.btnContainer}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={ ()=> navigate('LoginScreen') }>
                    <Text style={styles.btnText}>Go login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={ ()=> navigate('HomeScreen') }>
                    <Text style={styles.btnText}>Go Home</Text>
                </TouchableOpacity>




            </View>

        );
    }





}




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

