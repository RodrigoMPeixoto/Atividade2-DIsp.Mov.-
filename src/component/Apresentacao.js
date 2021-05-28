//import liraries
import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from '../style/style';


// create a component
const Apresentacao = (props) => {
    return (
        <View>
            <Text style={styles.texto} onPress={props.updateState}>{props.estado}</Text>
        </View>
    );
}

//make this component available to the app
export default Apresentacao;
