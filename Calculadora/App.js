import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 
  const [ numberOne, setNumberOne] = useState("0")
  const [ numberTwo, setNumberTwo] = useState("0")
  const [ result, setResult] = useState(0)

  const sumar= () =>{ 

      let valor1 = parseInt(numberOne);
      let valor2 = parseInt(numberTwo);
      let suma = valor1 + valor2;
      setResult(suma);
  }

  const clearInput = () =>{

    setNumberOne("0");
    setNumberTwo("0");
    setResult(0);

  }


  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <StatusBar style="auto" />
      <TextInput   value= {numberOne}    onChangeText= {setNumberOne} style = {styles.cajas} />
      <TextInput value= {numberTwo}  onChangeText ={setNumberTwo} style = {styles.cajas}  />

      <Button title='Sumar'  onPress={sumar}  style = {styles.button}  />
      <Text > RESULTADO:  {result} </Text>
      <Button title='Limpiar'  onPress={clearInput}   style = {styles.button}   />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cajas : {

    borderColor: "black",
    borderWidth: 1,
    padding:5,
    width:50,
    textAlign:"center",
    marginBottom : 5

  },
  button : {
    backgroundColor:"red"

  }
});
