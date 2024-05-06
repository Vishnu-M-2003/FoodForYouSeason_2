import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

// importing for icons
import Icon from 'react-native-vector-icons/Entypo';
import PersonIcon from 'react-native-vector-icons/Ionicons';

// Importing sample data
import restaurantDetails from '../sampleData/RestaurentDetails';

const ShopListing = ({navigation}) => {
  // Initializing Use State
  const [searchRestaurents, setSearchRestaurents] = useState('');

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search Restaurents here"
            onChangeText={newText => setSearchRestaurents(newText)}
            defaultValue={searchRestaurents}
          />
          <Text style={styles.categoryHeading}>Restaurents</Text>

          <FlatList
            style={styles.forFlatList}
            data={restaurantDetails}
            renderItem={({item}) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('RestorentPersonal', {
                    restorentname: item.name,
                  })
                }>
                <View style={styles.individualRestaurentContainer}>
                  <View style={styles.individualRestaurentContainerInside}>
                    <Text style={styles.RestaurentText}>{item.name}</Text>
                    <Text style={styles.RestaurentText}>
                      {item.rating}
                      <Icon name="star" size={25} />
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
            keyExtractor={item => item.id}
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    height: 800,
  },
  searchBar: {
    backgroundColor: 'grey',
    height: 50,
    width: 370,
    marginTop: 20,
    marginLeft: 11,
    borderRadius: 30,
    paddingLeft: 15,
    fontSize: 20,
  },
  categoryHeading: {
    color: 'white',
    marginTop: 15,
    fontWeight: '900',
    fontSize: 30,
    textTransform: 'uppercase',
    marginLeft: 11,
  },
  individualRestaurentContainerInside: {
    height: 100,
    width: 350,
    marginLeft: 11.5,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  individualRestaurentContainer: {
    height: 100,
    backgroundColor: 'white',
    width: 370,
    marginLeft: 11.5,
    marginTop: 5,
    borderRadius: 30,
  },
  forFlatList: {
    marginTop: 12,
    marginBottom: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  RestaurentText: {
    fontWeight: '600',
    fontSize: 25,
  },
  barContainer: {
    height: 160,
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
});

export default ShopListing;
