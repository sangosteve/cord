import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
const MessageBox = ({message}) => {
  return (
    <View
      style={
        ([styles.container],
        {
          alignItems: message?.isOwn ? 'flex-end' : 'flex-start',
          marginLeft: message?.isOwn ? 0 : 10,
          marginRight: message?.isOwn ? 10 : 0,
        })
      }>
      <View
        style={{
          backgroundColor: message?.isOwn ? Colors.light.primaryBg : '#fff',
          marginLeft: message?.isOwn ? 70 : 0,
          marginRight: message?.isOwn ? 0 : 70,
          padding: 15,
          borderRadius: 7,
        }}>
        <Text
          style={[
            styles.msgText,
            {color: message?.isOwn ? Colors.light.text : '#000'},
          ]}>
          {message.msgContent}
        </Text>
      </View>
      <Text style={styles.timeStamp}>{message.timeStamp}</Text>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 50,
  },
  msgText: {
    fontSize: 18,
    lineHeight: 25,
  },
  timeStamp: {
    fontSize: 18,
    lineHeight: 25,
    color: 'gray',
    fontWeight: '500',
    marginTop: 5,
  },
});
