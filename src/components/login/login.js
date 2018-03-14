import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                    />
                    <Text style={styles.title}>An app made for OkeJek using React Native.</Text>
                </View>
                <View style={styles.formContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>MASUK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>DAFTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 80,
        height: 80,
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
    },

    formContainer: {
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: '#2980B9',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    }
})