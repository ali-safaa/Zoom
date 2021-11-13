import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ContactsMenu from '../Components/ContactsMenu'
import Header from '../Components/Header'
import MenuButtons from '../Components/MenuButtons'
import Searchbar from '../Components/Searchbar'

const Home = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: "100%"}}>
            <Header />
            <Searchbar />
            <MenuButtons />
            <ContactsMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c"
    }
})
