import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';


export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
    };
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            value: "",
            status: "",
        }
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.body}>
                <View>
                    <Text style={styles.h1}>
                        Hello in my first App!
                    </Text>
                    <Text style={styles.h2}>
                        Please
                    </Text>
                    <View style={styles.wrapbtns}>
                        <View style={styles.btn}>
                            <Button title="SignIn" onPress= { ()=> navigate('LoginScreen') }/>
                        </View>
                        <View><Text>or</Text></View>
                        <View style={styles.btn}>
                            <Button title="SignUp" onPress= { ()=> navigate('RegScreen') }/>
                        </View>
                    </View>
                    <View>
                        <Button title="AccList" onPress= { ()=> navigate('AccList') }/>
                    </View>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#1abc9c",

    },
    h1: {
        marginTop: 50,
        margin: 20,
        marginBottom: 50,
        fontWeight: 'bold',
        fontSize: 40,
        textAlign:"center",


    },
    h2: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign:"center",
        marginBottom: 20,
    },

    btn: {
        width: 100,
        height: 100,
    },
    wrapbtns: {
        flexDirection:'row',
        justifyContent:"space-around",
    },

});

