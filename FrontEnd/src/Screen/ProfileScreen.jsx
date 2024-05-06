import { StyleSheet, Text, View, Pressable } from 'react-native'
import React,{useContext, useState, useEffect } from 'react'

import Icon from "react-native-vector-icons/Entypo"
import PenIcon from 'react-native-vector-icons/FontAwesome5'


const ProfileScreen = ({navigation}) => {


       const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)
       const [userData, setUserData] = useState()



       const handleLogout = () => {
              appwrite.logout()
              .then(() => {
                setIsLoggedIn(false);
                Snackbar.show({
                  text: 'Logout Successful',
                  duration: Snackbar.LENGTH_SHORT
                })
              })
       }
       
       useEffect(() => {
         appwrite.getCurrentUser()
         .then(response => {
           if (response) {
             const user= {
               name: response.name,
               email: response.email
             }
             setUserData(user)
           }
         })
       }, [appwrite])


  return (
    <View style={styles.mainContainer} >
     <View style={styles.profileContainer} >
       <View style={styles.forLogOutAndEditButton} >
              <Pressable onPress={() => handleLogout} >
                     <Text style={styles.logOut} >Log Out</Text>
              </Pressable>
              <View style={styles.icon} >
                     <Pressable onPress={() => navigation.navigate('EditProfile')} >
                            <PenIcon  name='pen' color={'black'} size={30} />
                     </Pressable>
              </View>
       </View>
       <View style={styles.profile} ></View>       
       <View style={styles.profileContent} >
              <Text style={styles.profileAttributed} >Name :</Text>
              <Text style={styles.profileAttributeValue} >Vishu Manikandan</Text>
              <Text style={styles.profileAttributed} >Email :</Text>
              <Text style={styles.profileAttributeValue} >vishnu8858@gmail.com</Text>
              <Text style={styles.profileAttributed} >Status :</Text>
              <Text style={styles.profileAttributeValue} >Seller</Text>
       </View>
     </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
       mainContainer: {
              backgroundColor: '#343434',
              height: 800,
       },
       forLogOutAndEditButton: {
              display:'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
       },
       profileContainer: {
              backgroundColor: 'white',
              height: 700,
              width: 350,
              borderRadius: 20,
              marginTop: 30,
              marginLeft: 20
       },
       logOut: {
              fontSize: 23,
              marginLeft: 10,
              marginTop: 10,
              color: 'black',
              fontWeight: '900',
              textTransform: 'uppercase'
       },
       profile: {
              backgroundColor: 'red',
              height: 200,
              width: 200,
              borderRadius: 100,
              marginTop: 50,
              marginLeft: 70

       },
       icon: {
              marginLeft: 100,
              width: 50,
              marginTop: 20,
              color: 'black'
       },
       profileContent: {
              backgroundColor: 'pink',
              height: 350,
              marginTop: 30
       },
       profileAttributed: {
              fontSize: 20,
              fontWeight: '400',
              color: 'black',
              marginLeft: 15,
              marginTop: 40
       },
       profileAttributeValue: {
              fontSize: 25,
              color: 'black',
              fontWeight: '800',
              marginLeft: 40
       }

})