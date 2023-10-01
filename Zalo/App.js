import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Form, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.eye}>
        <Image style={styles.eyeImg} source={require('/img/eye2.png')}  ></Image>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder='Please input user name'></TextInput>
        <Image style={styles.image1} source={require('/img/user.png')}></Image>
        <TextInput style={styles.textInput} placeholder='Please input password'></TextInput>
        <Image style={styles.image2} source={require('/img/lock.png')}></Image>
      </View>
      <br></br><br></br>
      <TouchableOpacity><button style={styles.button}>LOGIN</button></TouchableOpacity>
      <View style={styles.textRow}>
        <br></br>
        <a href='#' style={styles.a1}>Register</a>
        <a href='#' style={styles.a2}>Forgot Password</a>
      </View>
      <View style={styles.text}>
        <br></br>
        <p style={styles.textLine}>Other Login Methods</p>
      </View>
      <View style={styles.buttonRow}>
        <button  style={styles.button1} ></button>
        <button  style={styles.button1} ></button>
        <button  style={styles.button1} ></button>
      </View>




    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  eye: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '100%',
  },
  eyeImg: {
    width: '150px',
    height: '150px',
    position: 'absolute',
    justifyContent:'center'
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
    margin: 'auto',
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: '15%',
    borderBottomColor:'#bbb',
    borderBottomWidth:1,
    color:'#bbb'
  },
  button: {
    width: 330,
    height: 54,
    backgroundColor: '#386ffc',
    margin: 'auto',
    border: 0,
    fontSize: 25,
    fontWeight: '350',
    color: '#fff',
    borderRadius:10,
  },

  textRow:{
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row',
    backgroundColor:'#bbb',
    width:'100%',
    marginTop:'8%',
  },
  a1:{
    textDecorationLine:'none',
    color:'#000',
    fontSize:20,
    fontWeight:520,
    fontFamily:'sans-serif',
    backgroundColor:'#fff',
    width:'50%',
    paddingLeft:'10%',
  },
  a2:{
    textDecorationLine:'none',
    color:'#000',
    fontSize:20,
    fontWeight:520,
    fontFamily:'sans-serif',
    backgroundColor:'#fff',
    width:'50%',
    paddingRight:'5%',
  },
  textLine:{
    fontSize:20,
    fontWeight:300,
    fontFamily:'sans-serif',
    textAlign:'center'
  },
  text:{
    
  },

  buttonRow:{
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  button1:{
    width:75,
    height:75,
    borderColor:'#bbb',
    borderWidth:1,
  },




});
