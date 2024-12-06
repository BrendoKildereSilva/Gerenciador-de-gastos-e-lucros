import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function HomePage({ navigation }) {

  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.buttonaddProduct}>
        <Text style={styles.buttonText}>Eu sou um button</Text>
      </TouchableOpacity>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    
  },

  buttonaddProduct :{
    top: 600,
    right: 20,
    position: 'absolute',
    height: 70,
    width: 70,
    borderRadius: "50%",
    backgroundColor: 'red',


    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
