import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import individualRes from './ShopDetails';

// For selecting multiple category
import RNPickerSelect from 'react-native-picker-select';
const EditItem = ({navigation, route}) => {
  const [dishName, setDishName] = useState('');
  const [amount, setAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const {itemDetails, restorentname} = route.params;

  async function sendEdittedFormDataToBackend() {
    if (dishName == '' || amount == '' || quantity == '' || category == '') {
      Snackbar.show({
        text: 'Full Fields Required',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      const url = `http://10.0.2.2:8000/item/${itemDetails._id}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dishName: dishName,
          amount: amount,
          quantity: quantity,
          category: category,
        }),
      });

      // navigating to the restaurent details page
      // {
      //   dishName: dishName,
      //   amount: amount,
      //   quantity: quantity,
      //   category: category,
      //   name: restorentname,
      // }

      navigation.pop()
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Edit Item</Text>

        <View style={styles.containerForInputBox}>
          <Text style={styles.headingForInput}>Name of Dish</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={pre => setDishName(pre)}
            value={itemDetails.dishName && dishName}
          />

          <Text style={styles.headingForInput}>Amount</Text>
          <TextInput
            style={styles.inputBox}
            placeholder={JSON.stringify(itemDetails.amount)}
            value={amount}
            onChangeText={pre => setAmount(pre)}
          />
          <Text style={styles.headingForInput}>Quantity</Text>
          <TextInput
            style={styles.inputBox}
            placeholder={JSON.stringify(itemDetails.quantity)}
            value={quantity}
            onChangeText={pre => setQuantity(pre)}
          />
          <Text style={styles.headingForInput}>Category</Text>

          <RNPickerSelect
            onValueChange={value => setCategory(value)}
            items={[
              {label: 'Biriyani', value: 'Biriyani'},
              {label: 'Pizza', value: 'Pizza'},
              {label: 'Burger', value: 'Burger'},
              {label: 'Curry', value: 'Curry'},
              {label: 'Sandwich', value: 'Sandwich'},
              {label: 'Soup', value: 'Soup'},
              {label: 'Noodles', value: 'Noodles'},
              {label: 'Cakes', value: 'Cakes'},
              {label: 'Dessert', value: 'Dessert'},
              {label: 'Chicken', value: 'Chicken'},
              {label: 'Fish', value: 'Fish'},
              {label: 'Other', value: 'Other'},
            ]}
            style={pickerSelectStyles}
          />
        </View>
        {/* <Pressable onPress={sendingDataToTheBackend}> */}
        <Pressable
          onPress={() => {
            sendEdittedFormDataToBackend();
            
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
    marginTop: 9,
    color: 'black',
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
  headingForInput: {
    marginTop: 12,
    marginLeft: 34,
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
  formContainer: {
    backgroundColor: '#9f6363',
    height: 500,
    width: 370,
    borderRadius: 20,
  },
  formHeading: {
    fontSize: 28,
    marginLeft: 130,
    marginTop: 30,
    fontWeight: '700',
    color: 'black',
  },
  containerForInputBox: {
    height: 390,
  },
  inputBox: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 20,
    paddingLeft: 20,
    marginLeft: 34,
    marginTop: 9,
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
  },
});

export default EditItem;
