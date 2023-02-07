import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

// Hook para manejar el estado de los componente, permite rendirizar los
// cambios de un componente
import { useState } from "react";

export default function App() {
  let titleJs = "Title dinamico";

  let saludar = () => {
    Alert.alert("Hola dinamico");
  };


  //  ************************  USO DE HOOK useState *************

  /**
   * contador: variable que representara el dato
   * setContador: funcion que permite manipular y cambiar el estado de la variable
   *              , es como un metodo setter.
   *
   *
   * useState(0) : indica que inicilizamos la variable con el valor 0, dependdiente
   * del valor asignado se asignara el tipo de dato de la variable
   */

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < 10) {
      // Cambiar el valor o estado de la variable mediante el setter
      setContador(contador + 1);
    }else Alert.alert(`El valor maximo es 10`);
  };

  const decrementar = () => {

    if (contador >0){
      // Cambiar el valor o estado de la variable mediante el setter
      setContador(contador - 1);
    }else Alert.alert("No hay valor disponible");
    
  };

  return (
    <View style={[styles.container, styles.textos]}>
      {/* Define un componente de texto */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* Define un componente de StatusBar */}
      <StatusBar style="auto" />

      {/* Texto fijo y funcion js pasada, ojo sin llamar  a los () */}
      <Button title="Texto fijo" onPress={saludar} />

      {/*  title dinamico y js embebido */}
      <Button
        title={titleJs}
        onPress={() => {
          Alert.alert(`Hello World Embebido`);
        }}
    
      />

      <Text style= {styles.hooks} >  USO DE HOOK useState </Text>
        
      <Text> Contador : {contador} </Text>
      <Button title="Incrementar"  onPress={incrementar} />
      <Button title="Decrementar"  onPress={decrementar} />
    </View>
  );
}

// Define un objeto styles para los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textos: {
    backgroundColor: "red",
    color: "#222",
  },

  hooks : {

    color:"red",
    marginTop:"10px",
    textAlign: "center"

  }
});
