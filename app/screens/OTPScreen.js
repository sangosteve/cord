import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import OtpInputs from 'react-native-otp-inputs';
import {AuthContext} from '../contexts/AuthProvider';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTPScreen = ({route, navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const [code, setCode] = useState('');
  const {confirm} = route.params;
  const [res, setRes] = useState(null);
  console.log('CONFIRM: ', confirm);

  async function verifyOTP() {
    try {
      const data = await confirm.confirm(code);
      console.log('DATA: ', data?.additionalUserInfo?.isNewUser);
      if (data?.additionalUserInfo?.isNewUser) {
        navigation.navigate('Alias', {user: data});
      } else {
        setUser(data);
      }
      // const details = await auth().signInAnonymously();
      // console.log(details?.additionalUserInfo?.isNewUser);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <OtpInputs
        handleChange={code => setCode(code)}
        numberOfInputs={6}
        autofillFromClipboard={true}
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}
        inputStyles={{
          padding: 10,
          borderBottomWidth: 4,
          borderBottomColor: 'grey',
          flexDirection: 'row',
          fontSize: 24,
          fontWeight: '700',
          marginLeft: 5,
        }}
        focusStyles={{
          borderBottomColor: '#2CB9B0',
          color: '#000',
        }}
      />

      <TouchableOpacity style={styles.btn} onPress={verifyOTP}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80,
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
    fontSize: 22,
  },
});
