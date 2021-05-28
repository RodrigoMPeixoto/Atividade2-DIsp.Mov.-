import React, { Component } from 'react';

import { View, Text, StyleSheet} from 'react-native';
import styles from '../style/style';

// define your styles
class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Bem vindo</Text>
            </View>
        );
    }
};

//make this component available to the app
export default Home;