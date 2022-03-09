import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import ChatInput from '../components/ChatInput/ChatInput';
import {ScrollView} from 'react-native-gesture-handler';
import MessageBox from '../components/MessageBox/MessageBox';
import {GiftedChat} from 'react-native-gifted-chat';
const DMScreen = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        image: 'https://placeimg.com/140/140/any',
        sent: true,
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default DMScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  footer: {
    bottom: 10,
  },
});
