import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
const AliasScreen = ({navigation}) => {
  const [displayName, setDisplayName] = useState('');
  const updateProfile = async () => {
    try {
      await auth()
        .currentUser.updateProfile({
          displayName: displayName,
        })
        .then(() => {
          navigation.navigate('MainScreen');
        });
      // console.log('profile updated');
      // console.log('New details:', auth().currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Info</Text>
      <Text style={{marginTop: 25, fontSize: 18}}>
        Please provide your name and an optional profile photo
      </Text>
      <View style={styles.avatarWrapper}></View>
      <TextInput
        style={styles.inputText}
        onChangeText={displayName => setDisplayName(displayName)}
        value={displayName}
      />
      <View style={{marginTop: 200}}>
        <TouchableOpacity style={styles.btn} onPress={updateProfile}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AliasScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginTop: 25,
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'grey',
    marginTop: 25,
  },
  inputText: {
    width: '100%',
    borderBottomWidth: 1,
    fontSize: 24,
  },

  btn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'gray',
  },
  btnText: {
    fontSize: 24,
  },
});
