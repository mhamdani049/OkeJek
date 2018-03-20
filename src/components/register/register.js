import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="NAMA LENGKAP"
                />
                <TextInput
                    placeholder="EMAIL ATAU NOMOR PONSEL"
                />
            </View>
        );
    }

}