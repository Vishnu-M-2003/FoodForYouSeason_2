import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Snackbar from 'react-native-snackbar';
import { useNavigation } from '@react-navigation/native';

// For select
import RNPickerSelect from 'react-native-picker-select';
import ServerContext from '../Context/serverContext';

const CreateItems = ({ route }) => {

  const { restorentname, itemDetails } = route.params;

  const navigation = useNavigation()

  const [dishName, setDishName] = useState('');
  const [amount, setAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');


  const clientSocket = useContext(ServerContext)
  const hi = "hello"


  const sendingMessageToServerIo = () => {
    clientSocket.emit("Listing-Created", `New Listing Has Been Created By ${clientSocket.id}`)
  }

  async function sendingDataToTheBackend() {

    if (dishName == '' || amount == '' || quantity == '' || category == '') {
      Snackbar.show({
        text: 'Full Fields Required',
        duration: Snackbar.LENGTH_SHORT,
      })

    } else {
      navigation.pop()
      sendingMessageToServerIo()
      
      const url = 'http://10.0.2.2:8000/item/create';
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dishName: dishName,
          amount: amount,
          quantity: quantity,
          category: category,
          restorentname: restorentname
        }),
      }).then((res) => res.json())
      .then((data) => console.log(data))
    }
    return true
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Create Item</Text>

        <View style={styles.containerForInputBox}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter the name of dish"
            onChangeText={pre => setDishName(pre)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter the amount"
            onChangeText={pre => setAmount(pre)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter the quantity"
            onChangeText={pre => setQuantity(pre)}
          />

          <RNPickerSelect
            onValueChange={value => setCategory(value)}
            items={[
              { label: 'Biriyani', value: 'Biriyani' },
              { label: 'Pizza', value: 'Pizza' },
              { label: 'Burger', value: 'Burger' },
              { label: 'Curry', value: 'Curry' },
              { label: 'Sandwich', value: 'Sandwich' },
              { label: 'Soup', value: 'Soup' },
              { label: 'Noodles', value: 'Noodles' },
              { label: 'Cakes', value: 'Cakes' },
              { label: 'Dessert', value: 'Dessert' },
              { label: 'Chicken', value: 'Chicken' },
              { label: 'Fish', value: 'Fish' },
              { label: 'Other', value: 'Other' },
            ]}
            style={pickerSelectStyles}
          />
        </View>
        {/* <Pressable onPress={sendingDataToTheBackend}> */}
        <Pressable onPress={() => {
          sendingDataToTheBackend();

        }}>
          <Text style={styles.toSendForm}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};


const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    paddingLeft: 20,
    marginLeft: 34,
    marginTop: 30,
    fontWeight: '700',
    placeholderColor: 'black'
  },
});

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#343434',
    height: 710,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#9f6363',
    height: 500,
    width: 370,
    borderRadius: 20,
  },
  formHeading: {
    fontSize: 28,
    marginLeft: 110,
    marginTop: 30,
    fontWeight: '700',
    color: 'black',
  },
  containerForInputBox: {
    height: 300,
  },
  inputBox: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 20,
    paddingLeft: 20,
    marginLeft: 34,
    marginTop: 30,
  },
  toSendForm: {
    backgroundColor: 'white',
    fontSize: 18,
    width: 80,
    marginLeft: 140,
    paddingLeft: 15,
    borderRadius: 10,
    fontWeight: '600',
    color: 'black',
    marginTop: 60,
  },
});

export default CreateItems;
