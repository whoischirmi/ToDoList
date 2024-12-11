import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    text: {
        padding:20,
        textAlign:"center",
        borderRadius: 5,
        backgroundColor: "#FFD6E5",
        borderWidth: 2,
        borderColor:"#DCB8C5",
        marginTop: 20,
        marginLeft:"20%",
        width: "60%",
    },
});