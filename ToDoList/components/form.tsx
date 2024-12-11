import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View, Pressable } from "react-native";

export default function Form({ addHandler}) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Ещё одна задачка..." placeholderTextColor="#917F86"/>
            {/* <Button color="#FF5A95"  onPress={() => addHandler(text)} title="Добавить задачу!" /> */}
            <Pressable style={styles.press} onPress={() => addHandler(text)} title="Добавить задачу!">
                <Text style={styles.text}>Добавить задачку!</Text>
            </Pressable>

                {/* что делать дальше? андроид студио все засрали, как выкладывать и как тестить в виде мобилки?? */}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding:20,
        textAlign:"center",
        borderRadius: 5,
        backgroundColor: "#FFD6E5",
        borderWidth: 2,
        borderColor:"#DCB8C5",
        marginTop: 20,
        marginBottom: 10,
        marginLeft:"20%",
        width: "60%",
    },

    press: {
        padding:20,
        textAlign:"center",
        borderRadius: 5,
        backgroundColor: "#EA2169",
        borderWidth: 2,
        borderColor:"#C81C5A",
        marginBottom: 20,
        marginLeft:"20%",
        width: "60%",
    },

    text: {
        textAlign:"center",
        color: "#4C0921",
    },
});