import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

import HomeScreen from '../Screen/HomeScreen.jsx';
import LoginScreen from '../Screen/LoginScreen.jsx';
import SignUp from '../Screen/SignUp.jsx';

const NotAuthed = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown : 'false'}}
    initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default NotAuthed

// add(RNCConfigPackage())




