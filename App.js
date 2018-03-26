import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'
import RegScreen from './screens/RegScreen';
import AccList from './screens/AccList';



const AppNavigator = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
    RegScreen: { screen: RegScreen },
    AccList: { screen: AccList },

},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#16a085',


        }
    }
} );


export default class App extends React.Component {
  render() {
    return (
        <AppNavigator/>
    );
  }
}



