import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber('+1 650-555-3434');
    try {
      if (confirmation) {
        setConfirm(confirmation);
        // console.log(confirmation);
        navigation.navigate('OTP', {confirm: confirm});
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>

      <Text style={styles.header}>Enter your phone number</Text>
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.inputText}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        />

        <TouchableOpacity
          // disabled={confirm ? false : true}
          style={styles.btn}
          onPress={() => signInWithPhoneNumber(phoneNumber)}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dadada',
    padding: 20,
  },
  logo: {
    width: 170,
    height: 170,
    backgroundColor: 'grey',
  },

  header: {
    fontSize: 28,
    color: '#000',
    fontWeight: '700',
    marginTop: 25,
  },
  formWrapper: {
    width: '100%',
  },
  inputText: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 25,
    fontSize: 22,
  },
  btn: {
    width: '100%',
    padding: 10,
    backgroundColor: '#2CB9B0',
    borderRadius: 25,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 24,
  },
});
