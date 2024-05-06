import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

import CategoryPages from '../Screen/CategoryPages.jsx';
import ShopListing from '../Screen/ShopListing.jsx';
import ShopDetails from '../Screen/ShopDetails.jsx';
import CreateItems from '../Screen/CreateItems.jsx';
import EditItem from '../Screen/EditItemScreen.jsx';
import FoodDetail from '../Screen/FoodDetail.jsx';
import ProfileScreen from '../Screen/ProfileScreen.jsx';
import EditProfile from '../Screen/EditProfileScreen.jsx';
import { ServerContextProvider } from '../../App.jsx';
import ServerContext from '../Context/serverContext.js';

const Authed = () => {


  const socket = useContext(ServerContext)

  useEffect(() => {
  }, [])

  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="createItem" component={CreateItems} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={CategoryPages} options={{ headerShown: false }} />
      <Stack.Screen name="RestorentsList" component={ShopListing} options={{ headerShown: false }} />
      <Stack.Screen name="RestorentPersonal" component={ShopDetails} options={{ headerShown: false }} />
      <Stack.Screen name="editItem" component={EditItem} options={{ headerShown: false }} />
      <Stack.Screen name="foodDetails" component={FoodDetail} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}

export default Authed