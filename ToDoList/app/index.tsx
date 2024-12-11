import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "../components/header";
import ListItem from "../components/list";
import Form from "../components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить ...", key: "1"},
    { text: "Помыть ...", key: "2"},
    { text: "Сделать ...", key: "3"},
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) =>listOfItems.key != key);
    });
  };

  return (
    <View style={styles.header}>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {

  },
});


