import React , {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'; 

export default class SearchResult extends Component {

    render() {

        var {navigate} = this.props.navigation;

        return (
            <View style={styles.wrapper}>

                <TouchableWithoutFeedback onPress= {() => navigate("HomeScreen4", {})}>
                <Image style={styles.img1} source = {require('F:/React Codes/ExpoUI02/assets/back.png')} />
                </TouchableWithoutFeedback>

                <Image style={styles.img2} source = {require('F:/React Codes/ExpoUI02/assets/bg9.jpg')}/>
                <TextInput style={styles.input} onChangeText={(value) => this.setState({Search : value})}
                 placeholder={"Search a therapist near you"} />
                <Image style={styles.img3} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/search.png')} /> 
                <Text style={styles.txt1}> Therapists Found Near You </Text>
                <Image style={styles.img4} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/1.png')} /> 
                <Text style={styles.txt2}> John Doe </Text>
                <Text style={styles.txt4}> West Village {"\n"} 8 KM </Text>
                <Text style={styles.txt6}> ( 2 PM - 8 PM ) </Text>
                <Text style={styles.txt3}> Susan Joe </Text>
                <Text style={styles.txt5}> Greenwich College {"\n"} 11 KM </Text>
                <Text style={styles.txt7}> ( 8 AM - 8 PM ) </Text>
                <Image style={styles.img5} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/2.png')} /> 

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
        marginTop: -25,
        marginLeft: -300,
        width: 25,
        height: 25
    },

    img2: {
        width: 350,
        height: 280,
        marginTop: 20,
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    img3: {
        width: 18,
        height: 18,
        margin: -34,
        marginLeft: -310
    },

    img4: {
        width: 80,
        height: 80,
        marginTop: 20,
        marginLeft: -240,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    img5: {
        width: 80,
        height: 80,
        marginTop: -50,
        marginLeft: -240,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    input: {
        borderRadius: 20,
        backgroundColor: '#FFF',
        padding: 15,
        paddingHorizontal: 50,
        marginTop: -60,
        fontSize: 20,
        fontWeight: "200",
        width: 330
    },

    txt1: {
        fontSize: 26,
        fontWeight: "300",
        color: 'grey',
        marginTop: 80,
        marginLeft: -90
    },

    txt2: {
        fontSize: 22,
        fontWeight: "400",
        color: 'grey',
        marginTop: -65,
        marginLeft: -50
    },

    txt3: {
        fontSize: 22,
        fontWeight: "400",
        color: 'grey',
        marginTop: 50,
        marginLeft: -50
    },

    txt4: {
        fontSize: 16,
        fontWeight: "300",
        color: 'grey',
        marginTop: 0,
        marginLeft: -50
    },

    txt5: {
        fontSize: 16,
        fontWeight: "300",
        color: 'grey',
        marginTop: 0,
        marginLeft: -20
    },

    txt6: {
        fontSize: 18,
        fontWeight: "500",
        color: '#4F918C',
        marginTop: -35,
        marginLeft: 220
    },

    txt7: {
        fontSize: 18,
        fontWeight: "500",
        color: '#4F918C',
        marginTop: -35,
        marginLeft: 220
    }
})