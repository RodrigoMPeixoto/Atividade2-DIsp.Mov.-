import React, { Component } from 'react';
import { View, Image, TouchableOpacity,  Text, TextInput, Alert} from 'react-native';
import styles from '../style/style';

class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/img1.png')}/>
                <TextInput style={styles.caixa} placeholder={'Insira seu e-mail'}/>
                <TextInput style={styles.caixa} placeholder={'Insira sua senha'} secureTextEntry={true}/>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <Text style={styles.textButton}>Entre</Text>
                </TouchableOpacity>
            </View> 
        );
    };
};

//make this component available to the app
export default Login;