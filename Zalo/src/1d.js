import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Form, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <br></br>
        <h1>LOGIN</h1>
        <br></br>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder='Email'></TextInput>
        <TextInput style={styles.textInput} placeholder='Password'></TextInput>
        <Image style={styles.image0} source={require('/img/eye.png')}></Image>
      </View>
      <br></br><br></br>
      <TouchableOpacity><button style={styles.button}>LOGIN</button></TouchableOpacity>
      <View style={styles.text}>
          <p>When you agree to term and conditions</p>
          <p style={{ color: '#917bef', marginTop: -8 }}>For got your password?</p>
          <p style={{ marginTop: -8 }}>Or login with</p>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.buttonLogo}>
          <button style={styles.logo1}></button>
          <button style={styles.logo2}></button>
          <button style={styles.logo3}></button>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        <View style={styles.image}>
          <Image style={styles.image1} source={require('/img/facebook.png')}  ></Image>
        </View>
        <View style={styles.image}>
          <Image style={styles.image2} source={require('/img/zalo.png')}></Image>
        </View>
        <View style={styles.image}>
          <Image style={styles.image3} source={require('/img/google.png')}  ></Image>
        </View>
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
    fontFamily: 'sans-serif'
  },
  form: {
    // position: 'relative',

  },
  image0: {
    width: 36,
    height: 36,
    // position: 'absolute',
    marginLeft: 310,
    marginTop: -45,

  },
  textInput: {
    width: 330,
    height: 54,
    backgroundColor: '#c9e0d0',
    margin: 'auto',
    marginTop: 30,
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
  row1: {
    width: '360px',
    height: '54px',
    marginLeft: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    position: 'relative',
    marginTop: -43,
  },
  image1: {
    height: 35,
    width: 35,
    position: 'absolute'
  },
  image2: {
    height: 32,
    width: 32,
    position: 'absolute'
  },
  image3: {
    height: 32,
    width: 32,
    position: 'absolute'
  },
  image: {
    height: 54,
    width: 120,
  },
  row2: {
    width: '360px',
    height: '54px',
    marginLeft: '15px',
    marginTop: 30,
  },
  logo1: {
    height: 54,
    width: 120,
    backgroundColor: '#275a8d',
    border: 0,
  },
  logo2: {
    height: 54,
    width: 120,
    backgroundColor: '#1593c5',
    border: 0,
  },
  logo3: {
    height: 54,
    width: 120,
    backgroundColor: '#d8efde',
    borderColor: '#1593c5',
  },
  buttonLogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
