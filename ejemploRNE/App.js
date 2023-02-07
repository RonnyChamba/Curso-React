import { Button, Icon, Input } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {/* <StatusBar style="auto" /> */}

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button title="ok" />
        <Button title="outline" type="outline" />
        <Button title="secondary" color="secondary" />
        <Button title="error" color="error" />
        <Button title="warining" radius={"sm"} color="warning" />
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button
          title="Home"
          icon={{
            name: "home",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
        />

        <Button
          title="Laptop"
          icon={{
            name: "user",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
        />
        <Button radius={"md"}>
          <Icon name="home" type="font-awesome" color="white" /> Home
        </Button>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Ingrese su nombre"
          label = "nombre"
        />

        <Input
          value={name}
          onChangeText={setName}
          placeholder="Ingrese su nombre"
          errorMessage="error de label"
          errorStyle={{ color: "red" }}
        />
      </View>
    </View>
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
