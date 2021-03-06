import React, { Component }from "react";
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage, AppRegistry} from 'react-native';



export default class AccList extends Component {
    static navigationOptions = {
        title: "Account List",
    };
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',

        }
    };
    render(){
        const { navigate } = this.props.navigation;
        const userEmail = AsyncStorage.getItem('email').string;
        const userName =  AsyncStorage.setItem('userName').string;
        const userPass = AsyncStorage.setItem('password').string;

        return(

            <View style={styles.body}>
            <View style={styles.accUl}>
                <View style={styles.accLi}>
                    {userEmail}
                    {userName}
                    {userPass}
                </View>




            </View>

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

    },
    accUl: {
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    accLi: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    }

});

