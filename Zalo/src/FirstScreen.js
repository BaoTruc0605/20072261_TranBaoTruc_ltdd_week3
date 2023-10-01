import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <span class="dot"></span>
        </View>
      </View>
      <View style={styles.footer}>
        <div class="footer">
          <h1 style={{ textAlign: 'center', fontFamily:'sans-serif'}}>GROW</h1>
          <h1 style={{ textAlign: 'center', fontFamily:'sans-serif', marginTop: '-25px' }}>YOUR BUSINESS</h1>
          <br></br>
          <h4 style={{ textAlign: 'center', fontFamily:'sans-serif'}}>We will help you to grow your business using online server</h4>
          <br></br>
          <view style={styles.button}>
          <button style={{width:'119px',height:'48px',borderRadius: '10px', backgroundColor:'#e3c000', border:'0', fontWeight:'bold', fontSize:'25px'}}>LOGIN</button>
          <button style={{width:'119px',height:'48px',borderRadius: '10px', backgroundColor:'#e3c000', border:'0', fontWeight:'bold', fontSize:'25px'}}>SIGN IN</button>
          
          </view>
          
        </div>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ccf9',
    width: '100%',

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
