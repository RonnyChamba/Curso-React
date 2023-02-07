import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [peso, setPeso] = useState();
  const [estatura, setEstatura] = useState();
  const [imc, setImc] = useState(0);
  const [detalle, setDetalle] = useState("NA");

  const ejecucionImc = () => {
    let pesoNumber = parseFloat(peso);
    let estaturaNumber = parseFloat(estatura);
    calcularIMC(pesoNumber, estaturaNumber);
  };
  const calcularIMC = (pesoNumber, estaturaNumber) => {
    let estaturaMetros = estaturaNumber / 100;
    let restImc = pesoNumber / Math.pow(estaturaMetros, 2);
    generarDetalle(restImc);
  };

  const generarDetalle = (imcCalculado) => {
    let mensaje = "";

    if (imcCalculado < 18.5) {
      mensaje = "Su peso es inferior al normal";
    } else if (imcCalculado >= 18.5 && imcCalculado < 25.0) {
      mensaje = "Su peso es normal";
    } else if (imcCalculado >= 25.0 && imcCalculado < 30.0) {
      mensaje = "Su peso es superior al normal";
    } else if (imcCalculado > 30.0) {
      mensaje = "Tiene obesidad";
    }

    setImc(imcCalculado);
    setDetalle(mensaje);
  }

  const reiniciar =() =>{

    setImc(0);
    setDetalle("NA");
    setPeso("");
    setEstatura("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <StatusBar style="auto" />

      <View style={styles.box}>

        <TextInput
          placeholder="Ingrese peso en Kilogramos"
          value={peso}
          onChangeText={setPeso}
          style={styles.text}
        />
        <TextInput
          placeholder="Ingrese estatura en centímetros"
          value={estatura}
          onChangeText={setEstatura}
          style={styles.text}
        />

        <View style={[styles.boxFlex, styles.box]}>
          <Button title="Calcular" onPress={ejecucionImc} style={styles.btn}  />
          <Button title="Limpiar" onPress={reiniciar} style={styles.btn} />
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Resultados</Text>
        <Text>Su imc es: {imc}</Text>
        <Text>Detalle: {detalle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  box: {
    marginTop: 10,
    // backgroundColor : "red"
  },
  boxFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red", 
    padding:5
  },
  btn: {
    backgroundColor: "green"


  },
  text: {
    borderWidth: 1,
    // marginTop: 10,
    marginVertical: 10,
    padding: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
