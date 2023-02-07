import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Importa una funcion que permite crear un stack navegacion
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Products } from "./app/screens/ProductsScreen";
import { Contacts } from "./app/screens/ContactsSreen";
import { Home } from "./app/screens/HomeScreen";

/**
 * createNativeStackNavigator(); devuelve un componente, y ese componente
 * devuelto permite realizar la navegacion de tipo stack.
 *
 * La varible puede tener cualquier nombre
 *
 */
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //  Wrapper para manejar la navegacion
    <NavigationContainer>
      {/* Define una navegacionde tipo stack, dentro de el se definen los componentes que
      participaran en la nagevacion  */}
      <Stack.Navigator>
        {/* Define cada una de las pantallas para esta navegacion. Implicitmente a cada vista | pantalla se
      le pasa un objeto llamando navigation (Si esta en un esquema de navegacion), 
      dicho objeto permite redijirir a cada pantalla .

        La propiedad name define el nombre de la URL para navegar
      */}
        <Stack.Screen name="HomeNav" component={Home} />
        <Stack.Screen name="ProductsNav" component={Products} />
        <Stack.Screen name="ContactsNav" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
