import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#48d1cc',
      justifyContent: "center",
      alignItems: 'center',
    },
    texto: {
      color: '#800000',
      fontSize: 25,
      textAlign: 'center',
    },
    legenda: {
      color: '#b8860b',
      fontSize: 18,
    },
    button: {
      backgroundColor: 'blue',
      opacity: 0.6,
      alignItems: 'center',
      width: 200,
      height: 50,
      padding: 20,
      marginTop: 10,
      borderRadius: 20,
    },
    imagem: {
      width: 150,
      height: 150,
      borderRadius: 30,
    },
    caixa: {
      width: 200,
      backgroundColor: '#fff',
      fontSize: 25,
      padding: 10,
      marginTop: 10,
      borderRadius: 15,
    },
    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default styles;