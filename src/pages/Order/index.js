import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AuthContext} from '../../contexts/auth'

export default function Order() {

  const {name, user} = useContext(AuthContext)
 return (
   <View style={styles.container}>
     <Text>Order Page</Text>
     <Text>Name: {name}</Text>
     <Text>E-mail: {user.email}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})