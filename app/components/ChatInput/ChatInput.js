import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{position: 'relative', flex: 1}}>
          <TextInput style={styles.textInput} />
          <Ionicon
            name="happy-outline"
            size={32}
            style={{position: 'absolute', top: '20%', left: 10}}
          />
          <Ionicon
            name="attach"
            size={32}
            style={{position: 'absolute', top: '20%', right: 10}}
          />
          <Ionicon
            name="camera"
            size={32}
            style={{position: 'absolute', top: '20%', right: 50}}
          />
        </View>
        <TouchableOpacity style={styles.recordBtn}>
          <Ionicon name="mic" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
  },
  recordBtn: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.light.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
