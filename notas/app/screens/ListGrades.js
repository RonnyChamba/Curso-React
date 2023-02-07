import { Avatar, FAB, Icon } from "@rneui/base";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert,
} from "react-native";
import { getGrades, deleteGrade } from "../services/GradeService";
import { ListItem } from "@rneui/base";
import { useState } from "react";
export const ListGrades = ({ navigation }) => {


  const[time, setTime] = useState();

  // Para refrescar los cambios de la lista
  const refreshList = () =>{

    setTime(new Date().getTime());
  }

  const ItemGrade = ({ nota }) => {
    return (
      <TouchableHighlight onPress={ () =>{
        // Paso de parametros
        navigation.navigate("GradeFormNav", {nota,  fnRefresh: refreshList});
      } } >
        <ListItem bottomDivider >
          <Avatar
            title={nota.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: "#6733b9" }}
            rounded
          />
          {/* Representa con un columna cada Content */}
          <ListItem.Content
            style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start" }}
          >
            <ListItem.Title> {nota.subject}</ListItem.Title>
          </ListItem.Content>

          <ListItem.Content
            
            style={{ flex: 0, flexDirection: "row" }}
          >
            <ListItem.Title  > {nota.grade}</ListItem.Title>
          </ListItem.Content>
          <Icon  name="delete" color={'red'}  type ='material-community'  size={30}  onPress = { () =>{
            // Alert.alert("holaaa");

            deleteGrade(nota.subject);

            refreshList();
          }} />
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text>LISTAS DE NOTAS</Text> */}

      <FlatList
        data={getGrades()}
        renderItem={({ item }) => <ItemGrade nota={item} />}
        keyExtractor={(item) => item.subject}
        
        // SI la varuable de estado cmabia, hace que se repinte la lista
        extraData = {time}
      />
      <FAB
        title="+"
        placement="right"
        color="royalblue"
        onPress={() => navigation.navigate("GradeFormNav", {nota: null, fnRefresh:  refreshList})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
