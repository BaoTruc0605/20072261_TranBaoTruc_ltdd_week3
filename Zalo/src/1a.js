import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <linearGradient colors={['#C7F4F6','#D1F4F6','#E5F4F5','#00CCF9']} style={styles.container}> */}
      <View style={styles.header}>
        <View style={styles.circle}>
          <span class="dot"></span>
        </View>
      </View>
      <View style={styles.footer}>
        <div class="footer">
          <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>GROW</h1>
          <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '-25px' }}>YOUR BUSINESS</h1>
          <br></br>
          <h4 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>We will help you to grow your business using online server</h4>
          <br></br>
          <view style={styles.button}>
            <button style={{ width: '125px', height: '45px', backgroundColor: '#e3c000', border: '0', fontWeight: 'bold', fontSize: '22px' }}>LOGIN</button>
            <button style={{ width: '125px', height: '45px', backgroundColor: '#e3c000', border: '0', fontWeight: 'bold', fontSize: '22px' }}>SIGN IN</button>
          </view>
          <br></br>
          <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>HOW WE WORK?</h2>
        </div>
      </View>
      {/* </linearGradient> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundImage:'linear-gradient(#C7F4F6,#D1F4F6,#E5F4F5 87%,#00CCF9)',
  },
  header: {
    height: '40%',
  },
  footer: {
    height: '60%',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    border: '15px solid',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-around',
  }
});
