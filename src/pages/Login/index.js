import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import {AuthContext} from '../../contexts/auth'

export default function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const {signIn} = useContext(AuthContext)

 function handleLogin(){
  signIn(email, password)
 }

 return (
   <View style={styles.container}>
     <Text style={styles.title}></Text>

     <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="email"
     />

     <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
     />

     <TouchableOpacity style={styles.button} onPress={handleLogin}>
       <Text style={styles.buttonText}>Acessar</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 14,
    fontSize: 20,
  },
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#D1E3DA',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#10C96F',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})