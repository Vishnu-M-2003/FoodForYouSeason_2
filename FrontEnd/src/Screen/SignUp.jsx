
import React, { useState, useContext, useEffect } from 'react'
import Snackbar from 'react-native-snackbar'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function SignUp() {

  const [error, setError] = useState('')

  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [place, setPlace] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [signUpAsSeller, setSignUpAsSeller] = useState(false)
  const [aadhaarNumber, setAadhaarNumber] = useState(false)
  const [restaurantName, setRestaurantName] = useState('')
  const [contactNumber, setContactNumber] = useState('')

  const navigation = useNavigation()

  const checkEmail = () => {

  }
  const allFieldsPresentForSeller = () => {
    if (userName == '' || restaurantName == '' || place == '' || email == '' || password == '' || repeatPassword == '' || aadhaarNumber == '' || email == '' || contactNumber == '') {
      Snackbar.show({
        text: 'Full Fields Required',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
    if (aadhaarNumber.length !== 12) {
      Snackbar.show({
        text: 'Aadhaar number sholud be 12 character',
        duration: Snackbar.LENGTH_SHORT,
      })
    }

    if (contactNumber.length !== 10) {
      Snackbar.show({
        text: 'CONTACT NUMBER SHOULD BE 10 character',
        duration: Snackbar.LENGTH_SHORT,
      })
    }

  }
  const allFieldsPresentForCustomer = () => {
    if (userName == '' || email == '' || password == '') {
      Snackbar.show({
        text: 'Full Fields Required',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
  }
  const checkSamePassword = () => {
    if (password !== repeatPassword) {
      Snackbar.show({
        text: 'Password Not Equal',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
  }



  async function signUpRegister() {

    let data
    signUpAsSeller ? allFieldsPresentForSeller() : allFieldsPresentForCustomer()
    checkSamePassword()
    // navigation.pop()
    signUpAsSeller ? data = {
      userName: userName,
      restaurantName: restaurantName,
      place: place,
      email: email,
      password: password,
      aadhaar: aadhaarNumber,
      contactNumber: contactNumber
    } : data = {
      userName: userName,
      email: email,
      password: password,
    }
    console.log(data)

    const url = 'http://10.0.2.2:8000/user/create';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((data) => console.log(data))

    return true
  }



  return (

    <View style={styles.mainContainer} >
      <ScrollView>
        <View style={signUpAsSeller ? styles.formContainerWhenSeller : styles.formContainer}>
          <Text style={styles.formHeading} >Sign Up</Text>
          <View style={signUpAsSeller ? [styles.formContent && {
            height: 810,
          }] : styles.formContent} >
            <Text style={styles.inputHeading} >Email :</Text>
            <TextInput style={styles.inputBox}
              value={userName}
              onChangeText={text => {
                setError('');
                setUserName(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              keyboardType="email-address"
              placeholder="Email"
            />
            <Text style={styles.inputHeading}>Password :</Text>
            <TextInput style={styles.inputBox}
              value={password}
              onChangeText={text => {
                setError('');
                setPassword(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder="Password"
            />
            <Text style={styles.inputHeading}>Username :</Text>
            <TextInput style={styles.inputBox}
              value={email}
              onChangeText={text => {
                setError('');
                setEmail(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder="Name"
            />
            <Text style={styles.inputHeading}>Repeat Password :</Text>
            <TextInput style={styles.inputBox}
              value={repeatPassword}
              onChangeText={text => {
                setError('');
                setRepeatPassword(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder=" Repeat Password"
            />
            {signUpAsSeller ? <Text style={styles.inputHeading}>AdharNumber</Text> : null}
            {signUpAsSeller ? <TextInput style={styles.inputBox}
              value={aadhaarNumber}
              onChangeText={text => {
                setError('');
                setAadhaarNumber(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder="Aadhaar Number"
            /> : null}
            {signUpAsSeller ? <Text style={styles.inputHeading}>place</Text> : null}
            {signUpAsSeller ? <TextInput style={styles.inputBox}
              value={place}
              onChangeText={text => {
                setError('');
                setPlace(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder="Place"
            /> : null}

            {signUpAsSeller ? <Text style={styles.inputHeading}>Restaurant Name</Text> : null}
            {signUpAsSeller ? <TextInput style={styles.inputBox}
              value={restaurantName}
              onChangeText={text => {
                setError('');
                setRestaurantName(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder="Restaurant Name"
            /> : null}

            {signUpAsSeller ? <Text style={styles.inputHeading}>Contact Number</Text> : null}
            {signUpAsSeller ? <TextInput style={styles.inputBox}
              value={contactNumber}
              onChangeText={text => {
                setError('');
                setContactNumber(text);
              }}
              placeholderTextColor={'#AEAEAE'}
              placeholder="Restaurant Name"
            /> : null}


            <Pressable onPress={() => signUpRegister()}>
              <Text style={styles.sendButton} >Send</Text>
            </Pressable >
            <Pressable onPress={() => signUpAsSeller ? setSignUpAsSeller(false) : setSignUpAsSeller(true)}>
              {signUpAsSeller ? <Text style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
                marginTop: 5,
                marginLeft: 90
              }} >SignUp an Customer</Text> : <Text style={styles.signUpAsSeller} >SignUp an Seller</Text>}


            </Pressable>
          </View>

        </View>
      </ScrollView>
    </View >

  )
}


export default SignUp


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#343434',
    height: 760
  },
  formContainer: {
    backgroundColor: '#9f6363',
    height: 550,
    width: 320,
    borderRadius: 20,
    marginLeft: 35,
    marginTop: 100,
  },
  formHeading: {
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
    textTransform: 'uppercase',
    marginLeft: 85,
    marginTop: 20,
  },
  formContent: {
    height: 370,
  },
  inputHeading: {
    fontSize: 17,
    marginLeft: 30,
    marginTop: 20,
    fontSize: 15,
    color: 'black'
  },
  inputBox: {
    height: 39,
    backgroundColor: 'white',
    width: 250,
    marginLeft: 33,
    marginTop: 10,
    fontSize: 15,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 10
  },
  sendButton: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    textTransform: 'uppercase',
    marginTop: 14,
    backgroundColor: 'white',
    marginLeft: 110,
    width: 100,
    paddingLeft: 25,
    borderRadius: 20,
    height: 40,
    paddingTop: 7
  },
  signUpAsSeller: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 105
  },
  formContainerWhenSeller: {
    // height and margin top are the only changes here
    marginTop: 20,
    height: 880,
    backgroundColor: '#9f6363',
    width: 320,
    borderRadius: 20,
    marginLeft: 35,
    marginBottom: 30
  },
});