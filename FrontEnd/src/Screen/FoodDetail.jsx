import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FoodDetail = ({navigation, route}) => {
  const {id} = route.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.foodDetailContainer}>
        <View style={styles.forPhoto}></View>
        <View style={styles.detailsForFoodDetails}>
          <Text style={styles.forDetailHeading}>Name :</Text>
          <Text style={styles.forDetailsContent}>Name</Text>
          <Text style={styles.forDetailHeading}>Amount :</Text>
          <Text style={styles.forDetailsContent}>Amount</Text>
          <Text style={styles.forDetailHeading}>Quantity :</Text>
          <Text style={styles.forDetailsContent}>Quantity</Text>
        </View>
        <View style={styles.forOrderingItem}>
          <View style={styles.orderMachine}>
            <View style={styles.decreasingPart}>
              <Text
                style={[styles.increasingAndDecreasing, styles.decreaseSign]}>
                -
              </Text>
            </View>
            <View style={styles.numberPart}></View>
            <View style={styles.incresingPart}>
              <Text style={styles.increasingAndDecreasing}>+</Text>
            </View>
          </View>
          <Pressable>
            <View style={styles.orderButton}>
              <Text style={styles.orderSign}>Book</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#343434',
    height: 760,
  },
  foodDetailContainer: {
    backgroundColor: '#9f6363',
    height: 600,
    width: 340,
    marginLeft: 28,
    marginTop: 50,
    borderRadius: 20,
  },
  forPhoto: {
    backgroundColor: 'black',
    height: 150,
    width: 150,
    borderRadius: 110,
    marginLeft: 90,
    marginTop: 60,
  },
  detailsForFoodDetails: {
    marginTop: 20,
  },
  forDetailHeading: {
    fontWeight: '600',
    fontSize: 15,
    paddingLeft: 40,
    color: 'white',
  },
  forDetailsContent: {
    fontWeight: '800',
    fontSize: 30,
    paddingLeft: 70,
    color: 'white',
  },
  forOrderingItem: {
    height: 120,
  },
  orderMachine: {
    backgroundColor: 'pink',
    height: 50,
    width: 150,
    marginTop: 20,
    marginLeft: 95,
    borderRadius: 20,
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'row',
  },
  incresingPart: {
    backgroundColor: '#c57223',
    width: 50,
  },
  numberPart: {
    backgroundColor: '#86a188',
    width: 50,
  },
  decreasingPart: {
    backgroundColor: '#c57223',
    width: 50,
  },
  decreaseSign: {
    paddingLeft: 10,
  },
  increasingAndDecreasing: {
    fontSize: 35,
    fontWeight: '900',
    marginLeft: 10,
    color: 'black',
  },
  orderButton: {
    backgroundColor: '#c57223',
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 95,
    borderRadius: 20,
  },
  orderSign: {
    fontSize: 30,
    fontWeight: '900',
    marginLeft: 40,
    marginTop: 5,
    color: 'black',
  },
});
