import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Form, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        
        <h1>LOGIN</h1>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder='Name'></TextInput>
        <Image style={styles.image1} source={require('/img/user.png')}></Image>
        <TextInput style={styles.textInput} placeholder='Password'></TextInput>
        <Image style={styles.image2} source={require('/img/lock.png')}></Image>
        <Image style={styles.image0} source={require('/img/eye.png')}></Image>
      </View>
      <br></br><br></br>
      <TouchableOpacity><button style={styles.button}>LOGIN</button></TouchableOpacity>
      <View>
        <br></br>
          <h3 style={styles.text}>CREATE ACCOUNT</h3>
      </View>




    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f1c300',
  },
  title: {
    fontFamily: 'sans-serif',
    height: '20%',
    marginTop: '15%',
    marginLeft: '10%',
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
  image1: {
    width: 36,
    height: 36,
    // position: 'absolute',
    marginLeft: 36,
    marginTop: -60,
    marginBottom: 25,

  },
  image2: {
    width: 36,
    height: 36,
    // position: 'absolute',
    marginLeft: 36,
    marginTop: -60,
    marginBottom: 25,

  },
  textInput: {
    width: 330,
    height: 54,
    backgroundColor: '#dcbc3b',
    margin: 'auto',
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: 50,
  },
  button: {
    width: 330,
    height: 54,
    backgroundColor: '#000',
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
