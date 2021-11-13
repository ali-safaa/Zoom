import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Enpyto from "react-native-vector-icons/Entypo"
const Header = () => {
    return (
        <View style={styles.container}>
          <Enpyto name="notification" size={30} color="#efefef" />
          <Text style={styles.heading}>meet & chat</Text>
          <Enpyto name="new-message" size={30} color="#efefef" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    heading: {
        color: "#efefef",
        fontSize: 20,
        fontWeight: "700"
    }
})
