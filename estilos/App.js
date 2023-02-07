import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    // En rjx solo puede haber un elemento padre
    <View style={styles.container}>


      <View >
      <Text style = {styles.box}>Leaning Flex</Text>
      <Text style = {styles.box}>Leaning Flex</Text>
      <Text style = {styles.box}>Leaning Flex</Text>
      </View>

      <View>
      <Text style = {styles.box}>Leaning Flex</Text>
      <Text style = {styles.box}>Leaning Flex</Text>
      <Text style = {styles.box}>Leaning Flex</Text>
      </View>



      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2

  },
  box : {
    marginBottom : 5,
    padding: 5,
    // paddingHorizontal:15,

    color: "white", 
    backgroundColor: "green"
  }
});
