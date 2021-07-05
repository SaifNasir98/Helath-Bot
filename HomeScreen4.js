import React , {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'; 

export default class HomeScreen4 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Search: ""
        }
    }

    search_field = () => {
        const { Search } = this.state
        if(Search == "") {
            this.props.navigation.navigate("SearchResult");
            //alert("No Results Found")
            //return false
        }
        else if(Search == "London" || Search == "Manchester" || Search == "Wolverhampton" 
        || Search == "Chelsea" || Search == "Crystal Palace") {
            this.props.navigation.navigate("SearchResult");
        }
        else {
            alert("Please Provide Another Area")
            return false
        }
    }

    render() {

        var {navigate} = this.props.navigation;

        return(
            <View style={styles.wrapper}>
                <ScrollView>

                <TouchableWithoutFeedback onPress= {() => navigate("HomeScreen3", {})}>
                <Image style={styles.img1} source = {require('F:/React Codes/ExpoUI02/assets/back.png')} />
                </TouchableWithoutFeedback>

                <Image style={styles.img2} source = {require('F:/React Codes/ExpoUI02/assets/bg7.png')}/>
                <Text style={styles.txt1}> Find and Book a Therapy Session </Text>
                <TextInput style={styles.input} onChangeText={(value) => this.setState({Search : value})}
                 placeholder={"Search a therapist near you"} />

                <TouchableWithoutFeedback onPress= {() => this.search_field()}>
                <Image style={styles.img3} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/search.png')} />                
                </TouchableWithoutFeedback> 

                <Text style={styles.txt2}> Upcoming Appointments </Text>
                <Image style={styles.img4} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/bg8.jpg')} />
                <Image style={styles.img5} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/user.png')} />
                <Image style={styles.img6} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/chat.png')} />
                <Image style={styles.img7} resizeMode="center" source = {require('F:/React Codes/ExpoUI02/assets/gear.png')} />

                </ScrollView>
                
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
        marginTop: 40,
        marginLeft: 20,
        width: 25,
        height: 25
    },

    img2: {
        width: 300,
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img3: {
        width: 18,
        height: 18,
        margin: -50,
        marginLeft: 30
    },

    img4: {
        width: 350,
        height: 200,
        marginTop: 20,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    },

    img5: {
        width: 35,
        height: 35,
        marginTop: 18,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img6: {
        width: 35,
        height: 35,
        marginTop: -35,
        marginLeft: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img7: {
        width: 35,
        height: 35,
        marginTop: -35,
        marginLeft: 290,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txt1: {
        fontSize: 26,
        fontWeight: "200",
        color: 'black',
        marginTop: 10,
        marginLeft: 10
    },

    txt2: {
        fontSize: 26,
        fontWeight: "100",
        color: 'black',
        marginTop: 80,
        marginLeft: 10
    },

    input: {
        borderRadius: 20,
        backgroundColor: '#F5F3F3',
        padding: 15,
        paddingHorizontal: 50,
        margin: 15,
        fontSize: 20,
        fontWeight: "200",
        width: 330
    }
})