import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Form, TextInput, Icon } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.lock}>
          <Image style={styles.imgLock} source={require('/img/lock.png')}  ></Image>
        </View>
      </View>
      <View style={styles.footer}>
        <div class="footer">
          <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>FORGET</h1>
          <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '-25px' }}>PASSWORD</h1>
          <br></br>
          <h4 style={{ textAlign: 'center', fontFamily: 'sans-serif', margin: '5%' }}>Provide your account's email for which you want to reset your password</h4>
          <br></br>
          <view style={styles.button}>
            <Image style={{ width: '32px', height: '32px', position: 'absolute', marginLeft: '34px', }} source={require('/img/email.png')}  ></Image>
            <TextInput placeholder='Email' style={styles.textInputStyle}>
            </TextInput>
          </view>
          <br></br>
          <button style={styles.buttonStyle}>NEXT</button>
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
    marginTop: '-15%',
    height: '60%',
  },
  lock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    height: '150px',
    width: '150px',
  },
  imgLock: {
    width: '150px',
    height: '150px',
    position: 'absolute'
  },
  button: {
    position: 'relative'
  },
  buttonStyle: {
    width: '85%',
    height: '45px',
    backgroundColor: '#e3c000',
    border: '0',
    fontWeight: 'bold',
    fontSize: '22px',
    marginTop: '40px',
    marginLeft: '30px'
  },
  textInputStyle: {
    backgroundColor: '#C4C4C4',
    height: '45px',
    width: '85%',
    marginLeft: '30px',
    fontSize: '20px',
    marginTop: '-5px',
    paddingLeft:50,
  }
});
