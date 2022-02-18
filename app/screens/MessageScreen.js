import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatContactsList from '../components/ChatContactCard/ChatContactsList';
const MessageScreen = () => {
  return (
    <View>
      <ChatContactsList />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
