import React, {useState, useContext} from 'react'

import Snackbar from 'react-native-snackbar'

//context API
import {AppwriteContext} from '../appWrite/AppwriteContext.jsx'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView
} from 'react-native'

function LoginScreen(){

    const [error, setError] = useState('');
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    return(
      <ScrollView>
        <View style={styles.mainContainer} >
            <View style={styles.formContainer}>
                <Text style={styles.formHeading} >Login</Text>
                <View style={styles.formContent} >
                    <Text style={styles.inputHeading} >Email :</Text>
                    <TextInput style={styles.inputBox} 
                              keyboardType="email-address"
                              value={email}
                              onChangeText={text => setEmail(text)}
                              placeholderTextColor={'#AEAEAE'}
                              placeholder="Email"
                    />
                    <Text style={styles.inputHeading}>Password :</Text>
                    <TextInput style={styles.inputBox} 
                              value={password}
                              onChangeText={text => setPassword(text)}
                              placeholderTextColor={'#AEAEAE'}
                              placeholder="Password"
                    />
                </View>
                <Pressable>
                    <Text style={styles.sendButton} >Login</Text>
                </Pressable>
            </View> 
        </View>
      </ScrollView>
        
    )
}




const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#343434',
        height: 760
    },
    formContainer: {
        backgroundColor: '#9f6363',
        height: 400,
        width: 300,
        borderRadius: 20,
        marginLeft: 49,
        marginTop: 200
    },
    formHeading: {
        fontSize: 35,
        fontWeight: '900',
        color: 'black',
        textTransform: 'uppercase',
        marginLeft: 100,
        marginTop: 55
    },
    formContent: {
        height: 200,
    },
    inputHeading: {
        fontSize: 17,
        marginLeft: 30,
        marginTop: 20,
        fontSize: 15,
        color :'black'
    },
    inputBox: {
        height: 35,
        backgroundColor: 'white',
        width: 200,
        marginLeft: 45,
        marginTop: 10,
        fontSize: 15,
        borderRadius: 10,
        paddingLeft: 15
    },
    sendButton: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
        textTransform: 'uppercase',
        marginTop: 10,
        backgroundColor: 'white',
        marginLeft: 100,
        width: 100,
        paddingLeft: 25,
        borderRadius: 20,
        height: 40,
        paddingTop: 7
    }
})


export default LoginScreen