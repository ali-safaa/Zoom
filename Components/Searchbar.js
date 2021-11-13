import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto"
const Searchbar = () => {
    return (
        <View style={styles.container}>
            <Fontisto name="search" size={20} color="#585858"/>
            <Text style={styles.searchBarText}>search</Text>
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        backgroundColor: "#333",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,

    },
    searchBarText: {
        color: "#858585",
        paddingLeft: 10,
        fontSize: 20
    }
})
