import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const ChatContactCard = ({username, lastMessage, lastMsgTimestamp, imgUrl}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('DM')}>
        <View style={styles.container}>
          <View style={styles.userDetails}>
            <View style={styles.avatar}>
              <Image source={{uri: imgUrl}} style={styles.avatarImg} />
            </View>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.username}> {username}</Text>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {lastMessage}
              </Text>
            </View>
          </View>

          <View style={styles.msgTimestamp}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              {lastMsgTimestamp}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChatContactCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  userDetails: {
    flexDirection: 'row',
    width: '80%',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoTextWrapper: {
    width: '90%',
    alignItems: 'flex-start',
    marginLeft: 15,
  },

  text: {
    color: '#000',
  },

  username: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  lastMessage: {
    fontSize: 18,
  },
  msgTimestamp: {
    width: '20%',
    alignItems: 'flex-end',
  },
});
