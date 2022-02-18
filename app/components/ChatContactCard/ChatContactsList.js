import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ChatContactCard from './ChatContactCard';

const ChatContactsList = () => {
  const contacts = [
    {
      id: 1,
      username: 'Diana Knight',
      lastMessage: 'Lets meet tommorow and finalise',
      lastMsgTimestamp: '3m',
      imgUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 2,
      username: 'John Doe',
      lastMessage:
        'I think if using the MERN stack will be more viable considering the time frame of the project',
      lastMsgTimestamp: '5m',
      imgUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
    {
      id: 3,
      username: 'Larry Hoover',
      lastMessage: 'Can you please schedule a meeting with the team',
      lastMsgTimestamp: '2d',
      imgUrl: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      id: 4,
      username: 'Jack Berry',
      lastMessage: 'Can you please schedule a meeting with the team',
      lastMsgTimestamp: '2d',
      imgUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      id: 5,
      username: 'Melinda Linney',
      lastMessage: 'Can you please schedule a meeting with the team',
      lastMsgTimestamp: '2d',
      imgUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
    {
      id: 6,
      username: 'Steve Doe',
      lastMessage: 'Can you please schedule a meeting with the team',
      lastMsgTimestamp: '2d',
      imgUrl: 'https://randomuser.me/api/portraits/men/70.jpg',
    },
    // {
    //   id: 7,
    //   username: 'Kelly Price',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
    // },
    // {
    //   id: 8,
    //   username: 'Jane Byrd',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/women/49.jpg',
    // },
    // {
    //   id: 9,
    //   username: 'Martin Byrd',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
    // },
    // {
    //   id: 10,
    //   username: 'Tracey White',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    // },
    // {
    //   id: 11,
    //   username: 'Riley Blake',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
    // },
    // {
    //   id: 12,
    //   username: 'Lori Harvey',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/women/85.jpg',
    // },
    // {
    //   id: 13,
    //   username: 'Marissa James',
    //   lastMessage: 'Can you please schedule a meeting with the team',
    //   lastMsgTimestamp: '2d',
    //   imgUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
    // },
  ];
  return (
    <>
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ChatContactCard
            username={item.username}
            lastMessage={item.lastMessage}
            lastMsgTimestamp={item.lastMsgTimestamp}
            imgUrl={item.imgUrl}
            keyExtractor={({item}) => item.id}
          />
        )}
      />
    </>
  );
};

export default ChatContactsList;

const styles = StyleSheet.create({});
