import React , {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'; 

export default class HomeScreen1 extends Component {

    state = {
        toggle: false
    }

    state = {
        toggle1: false
    }

    state = {
        toggle2: false
    }

    state = {
        toggle3: false
    }

    _onPress() {
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
    }

    _onPress1() {
        const newState1 = !this.state.toggle1;
        this.setState({toggle1:newState1})
    }

    _onPress2() {
        const newState2 = !this.state.toggle2;
        this.setState({toggle2:newState2})
    }

    _onPress3() {
        const newState3 = !this.state.toggle3;
        this.setState({toggle3:newState3})
    }
    

    render() {

        var {navigate} = this.props.navigation;

        const {toggle} = this.state;
        const {toggle1} = this.state;
        const {toggle2} = this.state;
        const {toggle3} = this.state;

        const btnBg = toggle? "#4F918C":'#E8E8E8';
        const btnBg1 = toggle1? "#4F918C":'#E8E8E8';
        const btnBg2 = toggle2? "#4F918C":'#E8E8E8';
        const btnBg3 = toggle3? "#4F918C":'#E8E8E8';

        const txtColor = toggle? "white":'grey';
        const txtColor1 = toggle1? "white":'grey';
        const txtColor2 = toggle2? "white":'grey';
        const txtColor3 = toggle3? "white":'grey';

        return(
            <View style={styles.wrapper}>

                <TouchableWithoutFeedback onPress= {() => navigate("HomeScreen", {})}>
                <Image style={styles.img1} source = {require('F:/React Codes/ExpoUI02/assets/back.png')} />
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback onPress= {() => navigate("HomeScreen2", {})}>
                <Image style={styles.img3} source = {require('F:/React Codes/ExpoUI02/assets/forward.png')} />
                </TouchableWithoutFeedback>
            
                <Image style={styles.img2} source = {require('F:/React Codes/ExpoUI02/assets/bg4.png')} />
                <Text style={styles.txt1}> How soon would you like </Text>
                <Text style={styles.txt2}> to be seen? </Text>

                <View style={styles.line}></View>

                <TouchableOpacity style={{padding: 15, marginHorizontal: 10, marginTop: 10,
                borderRadius: 20, backgroundColor: btnBg, justifyContent: 'center', alignItems: 'center',
                width: 300}} onPress={() => this._onPress()} >
                    <Text style={{fontSize: 20, fontWeight: "300", color: txtColor}} > Within 48 Hours </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding: 15, marginHorizontal: 10, marginTop: 5,
                borderRadius: 20, backgroundColor: btnBg1, justifyContent: 'center', alignItems: 'center',
                width: 300}} onPress={() => this._onPress1()} >
                    <Text style={{fontSize: 20, fontWeight: "300", color: txtColor1}} > Soon ( This Week ) </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding: 15, marginHorizontal: 10, marginTop: 5,
                borderRadius: 20, backgroundColor: btnBg2, justifyContent: 'center', alignItems: 'center',
                width: 300}} onPress={() => this._onPress2()} >
                    <Text style={{fontSize: 20, fontWeight: "300", color: txtColor2}} > No Rush ( This Month ) </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding: 15, marginHorizontal: 10, marginTop: 5,
                borderRadius: 20, backgroundColor: btnBg3, justifyContent: 'center', alignItems: 'center',
                width: 300}} onPress={() => this._onPress3()} >
                    <Text style={{fontSize: 20, fontWeight: "300", color: txtColor3}} > Just Browsing </Text>
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
        marginTop: -10,
        marginLeft: -300,
        width: 25,
        height: 25
    },

    img2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 170,
        marginTop: 20
    },

    img3: {
        marginTop: -25,
        marginLeft: 290,
        width: 25,
        height: 25
    },

    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: "200",
        color: 'black',
        marginTop: 30
    },

    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: "200",
        color: 'black',
        marginTop: 0,
    },

    line: {
        borderColor: "#4F918C",
        borderRadius: 50,
        margin: 30,
        borderWidth: 2,
        width: 30
    }
})