import React , {Component} from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'; 

export default class SplashScreen extends Component {

    render() {
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.wrapper}>
                <Image style={styles.logo} source = {require('F:/React Codes/ExpoUI02/assets/logo.png')} />
                <Text style={styles.heading}> Health </Text>
                <Text style={styles.heading1}> Bot. </Text>
                <Text style={styles.punch} onPress= {() => navigate("LoginScreen", {})}> Changing Lives. </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F918C'
    },

    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: "400",
        color: 'white'
    },
    
    heading1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: "100",
        color: 'white'
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 111,
        marginTop: -50
    },

    next: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 111,
        marginTop: 50
    },

    punch: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: "200",
        color: 'white',
        marginTop: 50
    }
})