import { Button, View, StyleSheet, Text } from "react-native";
// import { View } from "react-native"

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style  = {styles.content}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.boxButton}>
          <Button
            title="Contactos"
            onPress={() => {
              navigation.navigate("ContactsNav");
            }}
          />
          <Button
            title="Productos"
            onPress={() => {
              navigation.navigate("ProductsNav");
            }}
          />
        </View>
      </View>

      <Text style = {styles.autor}>Autor: Ronny Chamba</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding : 10 
  },
  title: {
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },

  content: {
      flex:1,
      justifyContent: "center",
  },
  boxButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "green",
    padding: 10,
  },
  autor: {
    textAlign: "right",
    color: "#fff"
  }
});
