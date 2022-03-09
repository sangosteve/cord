import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from '../components/CountryPicker/CountryPicker';
import {CountryCodes} from '../constants/CountryCodes';
import countries from '../constants/countries.json';
import Ionicon from 'react-native-vector-icons/Ionicons';
const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDialCode, setSelectedDialCode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
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
      <CountryPicker
        CountryCodes={countries}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedDialCode={selectedDialCode}
        setSelectedDialCode={setSelectedDialCode}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <View style={styles.formWrapper}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: '#fff',
            padding: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: selectedCountry ? selectedCountry.flag : countries[0]?.flag,
            }}
            style={{width: 50, height: 30}}
          />
          <Ionicon name="caret-down" size={26} style={{marginLeft: 7}} />

          <Text style={{fontSize: 22}}>{`+${
            selectedCountry
              ? selectedCountry.callingCode
              : countries[0]?.callingCode
          }`}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputText}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity
        // disabled={confirm ? false : true}
        style={styles.btn}
        onPress={() => signInWithPhoneNumber(phoneNumber)}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
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
    padding: 25,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 22,
    width: '65%',
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
