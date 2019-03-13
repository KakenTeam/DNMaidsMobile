import React, { Component } from "react";
import {Button, View, Text, Keyboard,StyleSheet, TextInput, TouchablewithoutFeedback, Image, Dimensions, TouchableOpacity, ScrollView, TouchableWithoutFeedback  } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";


export default class Signup extends Component{
    constructor(props) {
    super(props);
    this.state ={
    email: '',
    password: "",
    error: "",
    alert: ""
    }
  }

    _onPressSignUp = () => {
    //    this.props.navigation.navigate('Home')
    }
  
    async onLoginPressed(){
        try   {
            let response = await fetch('https://d90d63b5.ngrok.io/login/auth', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        username: this.state.email,
                        password: this.state.password
                    
                })
          });
            console.log(this.state.email+","+ this.state.password);
            let res = await response.text();
            let result = JSON.parse(res);
            if(response.status >= 200 && response.status < 300){
                this.setState({error:""});
                let accessToken = result.success;
                if(accessToken == "true"){
                console.log("success: " + accessToken);
                this._onPressSignUp();
                }
            } else {
                let error = res;
                throw error;
            }
            
                
        } catch (error){
            this.setState({error: error});
            console.log("error " + error);
        }
    }
    validate = () => {
        const {email, password, error} = this.state;

        let  reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
   
    if(this.state.email =="") {
       this.setState({alert: `Please fill the email`});
       console.log(this.state.email);
       return false;    
    }
     if(reg.test(this.state.email.trim()) ==false)
    {
        this.setState({alert: `Email is Not Correct`});
        console.log(this.state.email);
        return false; 
    }
     else if(this.state.password == "") {
        this.setState({alert: `Please fill the password`});
        return false; 
    } else {
        this.setState({alert: ``});
        console.log(this.state.email);
        this.onLoginPressed();
        console.log("aaaa");
    }
    Keyboard.dismiss();
}
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <LinearGradient colors={['rgba(0, 149, 243, 0.9)','rgb(1, 116, 178)', '#002233']} style = {styles.backGround}>
                </LinearGradient>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView style={styles.container}>
                        <View style={styles.up}>
                            <Image
                                style={styles.logo}
                                source={require('../view/img/icon_app.png')}
                            />
                        </View>
                        <View style={styles.down}>
                            <Text style ={{color:'red', textAlign:'center', fontSize: 20}}> {this.state.alert}</Text>
                            <View style={styles.headerTitleContainer}>
                                <View style={styles.leftTextContainer}> 
                                    <Text style={styles.headerTitle}>Email</Text>
                                </View>
                            </View>
                            <TextInput style={styles.testBorder} 
                                onChangeText={(text) => this.setState({email:  text})}
                                maxLength = {40}
                                placeholder="Enter your email"
                                // textContentType='emailAddress'
                                // keyboardType='email-address'
                                >
                                </TextInput>
                            <View style={styles.headerTitleContainer2}>
                                <View style={styles.leftTextContainer}>
                                    <Text style={styles.headerTitle}>Password</Text>
                                </View>
                            </View>
                            <TextInput style={styles.testBorder} 
                                onChangeText={(text) => this.setState({password: text})}
                                maxLength = {40}
                                placeholder="Enter your password"
                                secureTextEntry = {true}>
                                </TextInput>
                    
                            <TouchableOpacity style = {styles.btnSave} onPress={this.validate}>
                                <Text style={styles.headerTitle}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backGround: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    headerTitleContainer:{
        flexDirection: "row",
        height: 30,
        marginTop: 20,
        alignItems: 'flex-end'
    },
    headerTitleContainer2:{
        flexDirection: "row",
        height: 30,
        marginTop: 0,
        alignItems: 'flex-end'
    },
    logo: {
        height: 190,
        width: 150,
        resizeMode: 'stretch'
    },
    leftTextContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        marginLeft: 20
        // backgroundColor: 'red'
    },
    testBorder:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00a8ec',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        height: 40,
        marginTop: 10,
        marginLeft: 40, 
        marginRight: 40,
        paddingHorizontal: 10

    },
    headerTitle:{
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        // backgroundColor: 'blue'
    },
    Icon:{
        // backgroundColor: 'white'
    },
    btnMore:{
        borderRadius: 10,
        paddingHorizontal: 5
    },
    btnText:{
        color:  'white'
    },
    btnSave: {
        backgroundColor: '#069fff',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#069fff',
        marginTop: 15,
        marginLeft: 70,
        marginRight: 70,
        height: 50,
        bottom: 0,
        left: 0,
        right: 0
    },
    textSignUp: {
        backgroundColor: '#aaaaaa',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#069fff',
        marginTop: 10,
        marginLeft: 70,
        marginRight: 70,
        height: 50,
        bottom: 0,
        left: 0,
        right: 0
    },
    up: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    down: {
        // height: 500
    }
});