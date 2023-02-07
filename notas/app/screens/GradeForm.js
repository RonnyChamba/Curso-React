import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useState } from "react";
import { saveGrade, updateGrade } from "../services/GradeService";

export const GradeForm = ({ navigation, route }) => {
  let isNew = route.params.nota == null;
  let subjectR;
  let gradeR;

  if (!isNew) {
    subjectR = route.params.nota.subject;
    gradeR = route.params.nota.grade + "";
  }

  const [subject, setSubject] = useState(subjectR);
  const [grade, setGrade] = useState(gradeR);
  const [errorSubject, setErrorSubject] = useState();
  const [erroGrade, setErrorGrade] = useState();

  let hasErrors = false;

  const save = () => {
    setErrorSubject(null);
    setErrorGrade(null);
    hasErrors = false;
    validate();

    if (!hasErrors) {
      let data = { subject, grade };
      if (isNew) saveGrade(data);
      else updateGrade(data);

      // Metodo esta fnRefresh definido en ListGrade, ejecutara la funcion lo que hara que se repinte la lista
      route.params.fnRefresh();

      navigation.goBack();
    }
  };


  const validate = () => {
    if (subject == null || subject == "") {
      setErrorSubject("Debe ingresar una materia");
      hasErrors = true;
    }

    if (
      grade == null ||
      grade == "" ||
      parseFloat(grade) < 0 ||
      parseFloat(grade) > 10
    ) {
      setErrorGrade("Debe ingresar una nota entre 0 y 10");
      hasErrors = true;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ingreso Notas</Text>

      <Input
        value={subject}
        onChangeText={setSubject}
        placeholder="Ejemplo: Matemáticas"
        label="Nombre"
        disabled={!isNew}
        errorMessage={errorSubject}
      />

      <Input
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Nota"
        errorMessage={erroGrade}
        keyboardType="numeric"
      />
      <Button
        title="Guardar"
        icon={{ name: "save", type: "font-awesome", color: "white" }}
        buttonStyle={styles.buttonStyle}
        onPress={() => save()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "green",
  },
});
