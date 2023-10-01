import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Form, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <br></br>
        <h1>REGISTER</h1>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder='Name'></TextInput>
        <TextInput style={styles.textInput} placeholder='Phone'></TextInput>
        <TextInput style={styles.textInput} placeholder='Email'></TextInput>
        <TextInput style={styles.textInput} placeholder='Password'></TextInput>
        <Image style={styles.image0} source={require('/img/eye.png')}></Image>
        <TextInput style={styles.textInput} placeholder='Birthday'></TextInput>
      </View>
      <br></br><br></br>
      <TouchableOpacity><button style={styles.button}>REGISTER</button></TouchableOpacity>
      <View>
          <p style={styles.text}>When you agree to terms and conditions</p>
      </View>




    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#d8efde',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    height: '13%'
  },
  form: {
    // position: 'relative',

  },
  image0: {
    width: 36,
    height: 36,
    // position: 'absolute',
    marginLeft: 310,
    marginTop: -60,
    marginBottom: 25,

  },
  textInput: {
    width: 330,
    height: 54,
    backgroundColor: '#c9e0d0',
    margin: 'auto',
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: 20,
  },
  button: {
    width: 330,
    height: 54,
    backgroundColor: '#c34e3b',
    margin: 'auto',
    marginTop: 30,
    border: 0,
    fontSize: 25,
    fontWeight: '550',
    color: '#fff'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif',

  },





});
