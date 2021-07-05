import React , {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'; 

export default class HomeScreen extends Component {

    render() {
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.wrapper}>
                <Image style={styles.img1} source = {require('F:/React Codes/ExpoUI02/assets/bg2.png')} />
                <Image style={styles.img2} source = {require('F:/React Codes/ExpoUI02/assets/bg3.png')} />
                <Text style={styles.txt1}> Make peace of mind a </Text>
                <Text style={styles.txt2}> piece of cake </Text>
                <Text style={styles.txt3}> Let's find you a great therapist </Text>

                <TouchableOpacity onPress= {() => navigate("HomeScreen1", {})}>
                <View style={styles.buttonContainer}>
                <Text style={styles.btnText}> Let's Go </Text>
                </View>
                </TouchableOpacity>

            </View>
     
        );
    }
}

const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    img1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        marginTop: 0
    },

    img2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 10
    },

    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: "100",
        color: 'black',
        marginTop: 50
    },

    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: "200",
        color: '#4F918C',
        marginTop: 0
    },

    txt3: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        fontWeight: "200",
        color: 'black',
        marginTop: 40
    },

    buttonContainer: {
        padding: 15,
        marginHorizontal: 10,
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: '#4F918C',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300
    },

    btnText: {
        fontSize: 20,
        fontWeight: "300",
        color: 'white'
    }
})