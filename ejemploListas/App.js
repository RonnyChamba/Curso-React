import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

const people = [
  { nombre: "ROnny", apellido: "Chambaita", cedula: "172377640" },
  { nombre: "Rene", apellido: "Mena", cedula: "235547014" },
  { nombre: "Juan", apellido: "Ordoñes", cedula: "125485014" },
];
export default function App() {
  const fcRenderItem = (obj) => {
    // Ubico el parentesios el return para indica que todo lo que este
    // entre ellos es el retorno
    return (
      <View style={styles.itemList}>
        <Text style = {styles.indexList}> {obj.index+1}</Text>
        <View>
          <Text style={styles.mainTitle}>
         {obj.item.nombre} {obj.item.apellido}{" "}
          </Text>
          <Text style={styles.itemText}>{obj.item.cedula} </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxHeader]}>
        <Text style={styles.title}>Peoples</Text>
      </View>
      <View style={[styles.box, styles.boxMainContent]}>
        <FlatList
          style={styles.list}
          data={people}
          renderItem={fcRenderItem}
          keyExtractor={(item) => item.cedula}
        />
      </View>
      <View style={[styles.box, styles.boxFooter]}>
        <Text>
          <Text style={styles.autor}> Autor: </Text> Ronny Chamba{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    marginTop: 10,
    // backgroundColor: "red"
  },
  itemList: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "yellow",
    alignItems: "center"
  },
  mainTitle: {
    fontSize: 18,
  },
  itemText: {
    fontStyle: "italic",
  },
  
  indexList: {
    fontSize: 25,
    fontWeight:"bold"    ,
    marginRight:10
  },

  box: {
    flex: 1,
  },
  boxHeader: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  boxMainContent: {
    // backgroundColor: "green",
    flex: 10,
  },
  boxFooter: {
    // backgroundColor: "chocolate",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  autor: {
    fontWeight: "bold",
  }
});
