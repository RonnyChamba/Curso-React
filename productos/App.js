import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

let products = [
  {
    name: "Leche",
    category: "Lacteos",
    purchasePrice: 0.95,
    salePrice: 1.14,
    code: 10,
  },
  {
    name: "Galletas",
    category: "Dulces",
    purchasePrice: 0.65,
    salePrice: 0.78,
    code: 20,
  },
];

let flagIsNew = true;
let flagIndexSelected = -1;

export default function App() {
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [sizeList, setSizeList] = useState(products.length);

  const [isModalVisible, setModalVisible] = useState(false);

  const ComponentItem = ({ dataItem }) => {
    const { item, index } = dataItem;
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#dcdcdc"
        style={styles.touch}
        onPress={() => editProduct(index)}
      >
        <View style={styles.listItem}>
          <Text style={styles.listItemCode}>{item.code}</Text>

          <View style={styles.listItemContent}>
            <Text>{item.name}</Text>

            <Text>{item.category}</Text>
          </View>

          <Text style={styles.listItemPrice}>{item.salePrice}</Text>

          <View style={styles.listItemButton}>
            {/* <Button
              title="E"
              color="green"
              onPress={() => {
                flagIsNew = false;
                // setear el indice del elemento
                flagIndexSelected = index;
                editProduct();
              }}
            ></Button> */}
            <Button
              title="X"
              color="red"
              onPress={() => {
                flagIndexSelected = index;
                setModalVisible(!isModalVisible);
              }}
            ></Button>
            <ComponentModal />
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const editProduct = (index) => {
    flagIsNew = false;

    // setear el indice del elemento
    flagIndexSelected = index;

    let currentElement = products[flagIndexSelected];

    console.log(currentElement);

    setCode(currentElement.code.toString());
    setName(currentElement.name);
    setCategory(currentElement.category);
    setPurchasePrice(currentElement.purchasePrice.toString());
    setSalePrice(currentElement.salePrice.toString());
  };

  const ComponentModal = (props) => {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          // onRequestClose={() => {
          //   // Alert.alert("Modal has been closed.");
          //   // setModalVisible(!isModalVisible);
          // }}
        >
          <View style={styles.modal}>

          <View  style = {styles.modalContent}>
            <Text style = {styles.modalTitle}>Eliminar Producto</Text>
            <Text>¿Está seguro que quiere eliminar? </Text>

            <View style = {styles.modalBoxButton}>
              <Button title="Aceptar" color="green"  onPress={ deleteProduct} />
            <Button title="Cancelar" color="red"  onPress= { () =>{
              setModalVisible(!isModalVisible);
            }} />
            </View>
          </View>

          </View>
        </Modal>
      </View>
    );
  };
  const deleteProduct = () => {

    products.splice(flagIndexSelected, 1);

    setModalVisible(!isModalVisible);
    setSizeList(products.length);
   
  };

  const saveProduct = () => {
    // console.log("validacion : " + isFieldEmpty());
    if (!isFieldEmpty()) {
      if (flagIsNew) {
        if (!isExistCode()) {
          let newProduct = { code, name, category, purchasePrice, salePrice };
          products.push(newProduct);
          // console.log(products);
          // setSizeList(products.length);
          // resetField();
        } else {
          Alert.alert(`El código ${code} ya existe`);
          return;
        }
      } else {
        let elementCurrent = products[flagIndexSelected];

        elementCurrent.name = name;
        elementCurrent.category = category;
        elementCurrent.purchasePrice = purchasePrice;
        elementCurrent.salePrice = salePrice;
        // setSizeList(products.length);
        // resetField();
      }

      console.log(products);
      setSizeList(products.length);
      resetField();
    } else Alert.alert("Todos los campos son obligatorios");
  };

  const isFieldEmpty = () => {
    // console.log("code", code);
    // console.log("name", name);
    // console.log("category", category);
    // console.log("compra", purchasePrice);
    // console.log("sale", salePrice);
    return (
      code == undefined ||
      code == "" ||
      name == undefined ||
      name == "" ||
      category == undefined ||
      category == "" ||
      purchasePrice == undefined ||
      purchasePrice == "" ||
      salePrice == undefined ||
      salePrice == ""
    );
  };

  const resetField = () => {
    setCode(null);
    setName(null);
    setCategory(null);
    setPurchasePrice(null);
    setSalePrice(null);
    flagIsNew = true;
    flagIndexSelected = -1;
  };
  const isExistCode = () => {
    return products.find((pro) => pro.code == code) != undefined;
  };

  const calcSaleṔrice = (value) => {
    setPurchasePrice(value);

    if (value == null || value == "" || value == undefined) {
      setSalePrice(null);
    } else {
      let calc = ((parseFloat(value) * 20) / 100 + parseFloat(value)).toFixed(
        2
      );
      setSalePrice(calc.toString());
    }
  };
  return (
    <View style={styles.container}>
      {/* FORMULARIO*/}

      <View style={[styles.box, styles.boxForm]}>
        <ScrollView>
          <Text style={styles.title}>PRODUCTOS</Text>
          <View>
            <TextInput
              style={styles.inputText}
              placeholder="Ingrese el código"
              keyboardType="numeric"
              editable={flagIsNew}
              value={code}
              onChangeText={setCode}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Ingrese el nombre"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Ingrese la categoria"
              value={category}
              onChangeText={setCategory}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Ingrese el precio compra"
              keyboardType="numeric"
              value={purchasePrice}
              onChangeText={calcSaleṔrice}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Ingrese el precio venta"
              keyboardType="numeric"
              value={salePrice}
              onChangeText={setSalePrice}
              editable={false}
            />
            <View style={styles.boxButtons}>
              <Button title="NUEVO" onPress={resetField} />
              <Button title="GUARDAR" onPress={saveProduct} />
              <Text>
                Productos: <Text> {sizeList}</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* MAIN CONTENT*/}

      <View style={[styles.box, styles.boxMainContent]}>
        <FlatList
          style={styles.list}
          data={products}
          renderItem={(obj) => <ComponentItem dataItem={obj} />}
          keyExtractor={(item) => item.code}
        />
      </View>

      {/* FOOTER*/}

      <View style={[styles.box, styles.boxFooter]}>
        <Text> Autor: Ronny Chamba </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  box: {
    marginBottom: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  inputText: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    padding: 5,
    marginBottom: 8,
  },

  boxForm: {
    flex: 6,
    // backgroundColor : "green"
  },

  boxMainContent: {
    flex: 6,
    // backgroundColor: "red"
  },

  boxFooter: {
    flex: 0,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 0,
  },

  boxButtons: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  list: {
    // marginTop: 10,
    // backgroundColor : "red"
  },
  listItem: {
    // marginBottom: 7,
    padding: 5,
    paddingHorizontal: 7,
    borderWidth: 2,
    // borderColor: "red",
    borderRadius: 10,
    borderColor: "lightgreen",
    // backgroundColor: '#DDDDDD',
    flexDirection: "row",
    // rowGap: 5,
    alignItems: "center",
  },
  listItemCode: {
    flex: 0,
    marginEnd: 7,
  },

  listItemContent: {
    flex: 8,
    // backgroundColor: "green"
  },

  listItemPrice: {
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 3,
    flex: 1.8,
    // backgroundColor : "red"
  },

  listItemButton: {
    // fontWeight: "bold",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  touch: {
    borderWidth: 2,
    // borderColor: "red",
    borderRadius: 10,
    borderColor: "#fff",
  },

  modal: {
    // backgroundColor: "blue",
    flex : 1,
    justifyContent: "center",
    alignItems: "center"
    
  },
  modalContent : {

    backgroundColor : "#DDDDDD",
    padding: 20
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom : 5
  }, 
  modalBoxButton:{
    flexDirection: "row",
    marginTop : 20, 
    justifyContent: "space-around"
  }
});
