import React, { useCallback, useContext, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { io } from 'socket.io-client';

import ServerContext from './src/Context/serverContext.js';

import HomeScreen from './src/Screen/HomeScreen.jsx';
import CategoryPages from './src/Screen/CategoryPages.jsx';
import ShopListing from './src/Screen/ShopListing.jsx';
import ShopDetails from './src/Screen/ShopDetails.jsx';
import CreateItems from './src/Screen/CreateItems.jsx';
import EditItem from './src/Screen/EditItemScreen.jsx';
import FoodDetail from './src/Screen/FoodDetail.jsx';
import Login from './src/Screen/LoginScreen.jsx';
import SignUp from './src/Screen/SignUp.jsx';

import NotAuthed from './src/Part/NotAuthed.jsx';
import Authed from './src/Part/Authed.jsx';

// const ServerContextProvider = ({children}) => {
//   return (
//     <ServerContext.Provider value={socket}>
//       {children}
//     </ServerContext.Provider>
//   )
// }

function App() {

  const[clientSocket, setClientSocket] = useState(null)
 
 useEffect(() => {

  const connetToServer = () => {
    const server = io('http://10.0.2.2:8000')
    setClientSocket(server)
    return server
  }
   
  const server = connetToServer()

  server.on('connect', (data) => {
      console.log(`connected to the server ${server.id}`)
    })

    return () => {
      server.on("disconnect", (data) => {
        console.log("disconnected", data)
      })
      server.emit("disconnect", () => {
        console.log("disconnected from the client side")
      })
    }
  }, [])

  const Stack = createNativeStackNavigator();


  return (

      <ServerContext.Provider value={clientSocket} >
        <NavigationContainer>
          <NotAuthed />
        </NavigationContainer>
      </ServerContext.Provider>

  );
}

export default App
