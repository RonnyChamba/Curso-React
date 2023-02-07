import { Button, View, StyleSheet, Text } from "react-native";

export const Contacts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ESTOY EN CONTACTOS</Text>

        <View style={styles.boxButton}>
          <Button
            title="Ir a Home"
            onPress={() => {
              navigation.navigate("HomeNav");
            }}
          />
        </View>
      </View>

      <Text style={styles.autor}>Autor: Ronny Chamba</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  boxButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    marginBottom: 15,
  },

  autor: {
    textAlign: "right",
    color: "#fff",
  },
});
