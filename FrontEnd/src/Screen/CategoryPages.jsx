import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import React, {useState} from 'react'

import filter from 'lodash.filter'


// importing for icons
import Icon from "react-native-vector-icons/Entypo"
import PersonIcon from 'react-native-vector-icons/Ionicons'

// Importing sample data
import categoryData from '../sampleData/CategoryData'

const CategoryPages = ({navigation}) => {

    // Initializing Use State
    const[searchCategory, setSearchCategory] = useState('')

    const[data, setData] = useState('')

    const searchQuery = (newText) => {
        setSearchCategory(newText)
        const formatedData = newText.toLowerCase()

        const filterData = filter(categoryData, (user) => {
            return contains(user, formatedData)
        })

        setData(filterData)
    }

    const contains = ({categoryName}, formatedData) => {

        if(categoryName.includes(formatedData)){
            return true
        }
        return false
        
    }

  return (
    <>
        <SafeAreaView>
        <View style={styles.container}>
            {/* <TextInput
                style={styles.searchBar}
                placeholder="Search categories here"
                onChangeText={(newText) => searchQuery(newText)}
                defaultValue={searchCategory}
                clearButtonMode='always'
                autoCapitalize='none'
                autoCorrect={false}
            /> */}
            <Text style={styles.categoryHeading} >
                categories
            </Text>

            <FlatList style={styles.forFlatList}
                data={categoryData}
                renderItem={({item}) => (
                    <View style={styles.individualCategoryContainer} >
                        <View style={styles.individualCategoryContainerInside}>
                            <Text style={styles.categoryText} >{item.categoryName}</Text>

                            <Image source={item.photo} style={styles.image} />
                            </View>
                    </View>
                )}

            />

            
            <View style={styles.barContainer}>
                <View style={styles.taskBar} >
                    <Pressable  >
                        <Icon name='home' size={35} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('RestorentsList')} >
                        <Icon name='shop' size={35} />
                    </Pressable>
                    <Pressable>
                        <PersonIcon name='person' size={35} />
                    </Pressable>
                </View>
            </View>
        </View>
        </SafeAreaView>
    </>
    
  )
}

const styles = StyleSheet.create({
    container:{
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
        fontSize: 20
    },
    categoryHeading: {
        color: 'white',
        marginTop: 15,
        fontWeight: '900',
        fontSize: 30,
        textTransform: 'uppercase',
        marginLeft: 11
    },
    individualCategoryContainerInside: {
        height: 100,
        width: 350,
        marginLeft: 11.5,
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    individualCategoryContainer: {
        height: 100,
        backgroundColor: 'white',
        width: 370,
        marginLeft: 11.5,
        marginTop: 5,
        borderRadius: 30

    },
    forFlatList: {
        marginTop: 12,
        marginBottom: 5,
        
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50
        
    },
    categoryText: {
        fontWeight: '600',
        fontSize: 30
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
    }
})

export default CategoryPages