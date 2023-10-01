import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Form, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <h1 style={styles.code}>CODE</h1>
      </View>
      <View style={styles.footer}>
        <div class="footer">
          <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>VERIFICATION</h2>
          <br></br>
          <h4 style={{ textAlign: 'center', fontFamily: 'sans-serif', margin: '5%' }}>Enter ontime password sent on ++849092605798</h4>
          <br></br>
          <View style={styles.verifyWrapper}>
            <TouchableOpacity style={styles.inputVerify}>
              <TextInput style={styles.inputCode} />
              <TextInput style={styles.inputCode} />
              <TextInput style={styles.inputCode} />
              <TextInput style={styles.inputCode} />
              <TextInput style={styles.inputCode} />
              <TextInput style={styles.inputCode} />
            </TouchableOpacity>
          </View>
          <br></br><br></br>
          <button style={styles.buttonStyle}>VERIFY CODE</button>
        </div>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundImage: 'linear-gradient(#C7F4F6,#D1F4F6,#E5F4F5 87%,#00CCF9)',
  },
  header: {
    height: '40%',
  },
  footer: {
    marginTop: '-10%',
    height: '60%',
  },
  code: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '60px',
    margin: 'auto'
  },
  imgLock: {
    width: '150px',
    height: '150px',
    position: 'absolute'
  },

  buttonStyle: {
    width: '91%',
    height: '45px',
    backgroundColor: '#e3c000',
    border: '0',
    fontWeight: 'bold',
    fontSize: '22px',
    marginLeft: '15px'
  },
  verifyWrapper: {
    width: '300px',
    height: '50px',
    marginLeft: '40px',
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  inputCode: {
    height: 50,
    width: 50,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  inputVerify: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
});
