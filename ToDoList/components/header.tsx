import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View>
        <Text style={styles.text}>Список делишек:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {

    },
    text: {
        fontSize: 30,
        padding:20,
        textAlign:"center",
        marginTop: 20,
        marginLeft:"20%",
        width: "60%",
    },
});