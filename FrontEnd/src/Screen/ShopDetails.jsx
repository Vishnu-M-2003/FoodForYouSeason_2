import {StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

// importing for icons
import Icon from 'react-native-vector-icons/Entypo';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';

import ServerContext from '../Context/serverContext';


const ShopDetails = ({navigation, route}) => {
  const {restorentname} = route.params;

  const [changeInListing, setChangeInListing] = useState('');
  const[sortByRestaurant, setSortByRestaurant] = useState([])

  const clientSocket = useContext(ServerContext)


  clientSocket.on("Refresh-Listing" , (data) => {
    setChangeInListing(data)
    // Snackbar.show({
    //   text: `${data}`,
    //   duration: Snackbar.LENGTH_SHORT,
    // })
  })


    // Change when an item is added or when an item is changed
  useEffect(() => {
    // visit ? setVisit(false) : setVisit(true)
    fetchData();
    setChangeInListing('')
  }, [changeInListing]);




  // to get the listings of items
  const fetchData = async () => {
    const url = `http://10.0.2.2:8000/item/${restorentname}`;
    let result = await fetch(url);
    let data = await result.json();
    // setItemData(data);
    console.log(data)
    const sortedItems = data.filter((item) => (
      item.restorentname === restorentname
    ))
    setSortByRestaurant(sortedItems)

  };

  // this will load each time we enter this page

  // to edit the items
  const editItem = async itemDetails => {
    // when clicked show the form
    // show the details there
    // when submitter edit the gform

    // const url = 'http://10.0.2.2:8080/item/id'
    // let result = await fetch (url)
    navigation.push('editItem', {
      itemDetails: itemDetails,
      restorentname: restorentname,
    });
  };

  // To delete the items
  const deleteItem = async id => {
    const url = `http://10.0.2.2:8000/item/${id}`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    fetchData();
  }

  // To enter detail page of the food item
  const foodDetailPage = id => {
    navigation.navigate('foodDetails', {
      id: id,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require('../assets/RestaurentImage/Banner/IndianSpices.jpeg')}
        />
      </View>
      <View style={styles.containerForProfileAndName}>
        <Image
          style={styles.profileImage}
          source={require('../assets/RestaurentImage/Profile/IndianSpicesProfile.jpg')}
        />
        <Text style={styles.restaurantName}>{restorentname}</Text>
      </View>

      <View style={styles.containerForAddListing}>
        <Text style={styles.headingOfFlatList}>Listings</Text>
        <Pressable
          onPress={() =>
            navigation.push('createItem', {
              restorentname: restorentname,
            })
          }>
          <Text style={styles.toAddNewListing}>+</Text>
        </Pressable>
      </View>
      <FlatList
        data={sortByRestaurant}
        renderItem={({item}) => (
          <>
            <Pressable onPress={() => foodDetailPage(item._id)}>
              <View style={styles.containerForListedItem}>
                <View style={styles.containerForNameQuantityAmount}>
                  <View style={styles.containerForItemNameandQuantity}>
                    <Text style={styles.itemName}>{item.dishName}</Text>
                    <Text style={styles.itemQuantity}>
                      {item.quantity ? `Quantity : ${item.quantity}` : null}
                    </Text>
                  </View>
                  <Text style={styles.itemAmount}>
                    {item.amount ? `$ ${item.amount}` : null}
                  </Text>
                </View>
                <View style={styles.containerForEditAndDelete}>
                  <Pressable
                    onPress={() => {
                      editItem(item);
                    }}>
                    <Text style={styles.forEdit}>Edit</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      deleteItem(item._id);
                    }}>
                    <Text style={styles.forDelete}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
          </>
        )}
        style={styles.forListedItems}
      />

      <View style={styles.barContainer}>
        <View style={styles.taskBar}>
          <Icon
            name="home"
            size={35}
            onPress={() => navigation.navigate('Category')}
          />
          <Icon name="shop" size={35} />
          <PersonIcon name="person" size={35} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#343434',
    height: 760,
  },
  bannerContainer: {
    height: 150,
  },
  bannerImage: {
    height: 150,
    width: 380,
    objectFit: 'cover',
    marginTop: 8,
    marginLeft: 7,
    borderRadius: 10,
  },
  profileImage: {
    height: 90,
    width: 90,
    marginLeft: 7,
    marginTop: 15,
    borderRadius: 50,
  },
  containerForProfileAndName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  containerForNameQuantityAmount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: 25,
    marginTop: 40,
    marginLeft: 15,
    fontWeight: '700',
    color: 'white',
  },
  headingOfFlatList: {
    marginLeft: 7,
    marginTop: 8,
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  containerForAddListing: {
    display: 'flex',
    flexDirection: 'row',
    width: 380,
    justifyContent: 'space-between',
  },
  toAddNewListing: {
    fontSize: 30,
    color: 'white',
  },
  forListedItems: {
    width: 380,
    marginLeft: 7,
  },
  containerForListedItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    width: 370,
    marginTop: 10,
    marginLeft: 4.5,

    // display:'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  containerForEditAndDelete: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginRight: 10,
  },
  itemName: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  itemQuantity: {
    fontSize: 19,
    marginLeft: 10,
    color: 'black',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  itemAmount: {
    fontSize: 25,
    marginTop: 27,
    marginRight: 10,
    color: 'black',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  barContainer: {
    height: 120,
    borderRadius: 10,
    backgroundColor: '#9d72ca',
  },
  taskBar: {
    height: 10,
    marginTop: 18,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forEdit: {
    color: 'black',
    fontWeight: '500',
  },
  forDelete: {
    color: 'black',
    fontWeight: '500',
  },
});

export default ShopDetails;
