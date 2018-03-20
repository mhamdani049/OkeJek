import React, { Component } from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation'

import Login from './src/components/login/login';
import Register from './src/components/register/register';

const RootStack = StackNavigator(
    {
        Login: { screen: Login},
        Register: { screen: Register },
    },
    {
        initialRouteName: 'Login'
    }
)

export default class App extends Component {
    render() {
        return (
            <RootStack/>
        )
    }
}