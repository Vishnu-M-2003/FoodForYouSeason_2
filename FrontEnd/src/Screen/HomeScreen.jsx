import { StyleSheet, Text, View, Image, Dimensions, Pressable, Button } from 'react-native'
import React from 'react'

// importing icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// // for navigation
// import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({navigation}) => {


  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Main.jpeg')} 
      style={styles.image} />
      <Text style={styles.heading} >FOOD FOR YOU</Text>
      <View style={styles.containerForAuthentication}>
          <Pressable onPress={() => navigation.push('Login')} >
              <View style={styles.forLoginAndSighup} >
                  <Text style={styles.forLoginHeading} >Login</Text>
              </View>
          </Pressable>
          <Pressable onPress={() => navigation.push('SignUp')}>
              <View style={styles.forLoginAndSighup} >
              <Text style={styles.forSighInHeading} >Sign Up</Text>
              </View>
          </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#343434',
    height: 800,
  },
  image: {
    height: 500,
    width: 390,
    marginTop: 20,
    
  },
  heading: {
    color: 'white',
    fontSize: 70,
    fontWeight: '900',
    marginLeft: 30,
    position: 'absolute',
    top: 370,

  },
  containerForAuthentication:{
    height: 200,
    borderRadius: 30,
    marginTop: 40,
  },
  forLoginAndSighup: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 45,
    backgroundColor: '#857f7f',
    height: 50,
    marginTop: 10,
    width: 300,
    borderRadius: 20,
 
  },
  forLoginHeading: {
    fontSize: 25,
    fontWeight: '900',
    marginTop: 5,
    marginLeft: 120,
    color: 'white'
  },
  forSighInHeading: {
    fontSize: 25,
    fontWeight: '900',
    marginTop: 5,
    marginLeft: 110,
    color: 'white'
  }



})

export default HomeScreen




