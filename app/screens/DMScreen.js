import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatInput from '../components/ChatInput/ChatInput';
import {ScrollView} from 'react-native-gesture-handler';
import MessageBox from '../components/MessageBox/MessageBox';
const DMScreen = () => {
  const messages = [
    {
      msgId: 1,
      msgContent:
        'I think if using the MERN stack will be more viable considering the time frame of the project',
      timeStamp: '3m',
      isOwn: true,
    },
    {
      msgId: 2,
      msgContent: 'Can you please schedule a meeting with the team',
      timeStamp: '3m',
      isOwn: false,
    },
    {
      msgId: 3,
      msgContent:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      timeStamp: '3m',
      isOwn: true,
    },
    // ,
    // {
    //   msgId: 4,
    //   msgContent:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   timeStamp: '3m',
    //   isOwn: false,
    // },
    // {
    //   msgId: 5,
    //   msgContent:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   timeStamp: '3m',
    //   isOwn: true,
    // },
    // {
    //   msgId: 6,
    //   msgContent:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   timeStamp: '3m',
    //   isOwn: true,
    // },
    // {
    //   msgId: 7,
    //   msgContent:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   timeStamp: '3m',
    //   isOwn: true,
    // },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={{padding: 10}}>
        {messages.map(message => (
          <MessageBox message={message} key={message.msgId} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <ChatInput />
      </View>
    </View>
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
