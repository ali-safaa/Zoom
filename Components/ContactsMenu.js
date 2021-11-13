import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const contactsMenuButton = [
    {
        type: "starred",
        name: "Starred"
    },
    {
        type: "contact",
        name: "Jone",
        photo: require("../assets/jone.jpg")

    },
    {
        type: "contact",
        name: "Sadie",
        photo: require("../assets/sadie.jpeg")

    },
    {
        type: "contact",
        name: "Jake",
        photo: require("../assets/jake.jpg")

    },
    {
        type: "contact",
        name: "Sara",
        photo: require("../assets/sara.jpg")

    },
]

const ContactsMenu = () => {
    return (
        <View style={styles.container}>
            {/* contact container  */}
            {contactsMenuButton.map((contact, index) => 
           <View key={index} style={styles.row}>
               {/* image  */}
               {contact.type == "starred" ? (   
                <View style={styles.starredIcon}>
                    <AntDesign name="star" size={30} color="#efefef" />
                </View> ) : 
                (
                    <Image source={contact.photo} style={styles.image}/>
                )
                }
           <View>
               <Text style={styles.text}>
                   {contact.name}
               </Text>
           </View>
           </View>
           )}
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    starredIcon: {
        backgroundColor: "#333",
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18
    }
})
