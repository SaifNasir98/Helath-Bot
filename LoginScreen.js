import React , {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'; 

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Pin: ""
        }
    }

    validate_field = () => {
        const { Pin } = this.state
        if(Pin == "") {
            alert("Please fill the section")
            return false
        }
        else if(Pin != "1989") {
            alert("Pin is incorrect")
            return false
        }
        else if(Pin == "1989") {
            this.props.navigation.navigate("HomeScreen")
        }
    }

    render() {
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.wrapper}>

                <Image style={styles.img1} source = {require('F:/React Codes/ExpoUI02/assets/bg.jpg')} />
                <Text style={styles.txt1}> Welcome Back </Text>
                <Text style={styles.txt2}> Login to your account </Text>
                <TextInput style={styles.input} placeholder={"Enter Your Pin"} 
                onChangeText={(value) => this.setState({Pin : value})} secureTextEntry={true} />
                <Text style={styles.txt3}> Forgot Pin? </Text>
                
                <TouchableOpacity onPress= {() => this.validate_field()}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.btnText} 
                    > Next 
                    </Text>
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
        backgroundColor: '#fff'
    },

    img1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 350,
        marginTop: -50
    },

    txt1: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        fontWeight: "100",
        color: 'black'
    },

    txt2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: "300",
        padding: 10,
        color: 'black'
    },

    txt3: {
        fontSize: 14,
        fontWeight: "300",
        marginRight: 220,
        marginTop: 15,
        marginBottom: 40,
        color: 'grey'
    },

    input: {
        borderRadius: 20,
        backgroundColor: '#F5F3F3',
        padding: 15,
        marginTop: 20,
        fontSize: 20,
        fontWeight: "200",
        width: 300
    },

    buttonContainer: {
        padding: 15,
        marginHorizontal: 10,
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