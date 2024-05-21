import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileButton = () => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(prev => !prev);
  };

  return (
    <View style={styles.conatiner}>
      {follow ? (
        <TouchableOpacity
          style={[styles.button, styles.alreadyFollowButton]}
          onPress={handleFollow}>
          <Text style={styles.followText}>팔로우 중</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, styles.followButton]}
          onPress={handleFollow}>
          <Text style={styles.followText}>팔로우</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={[styles.button, styles.messageButton]}>
        <Text style={styles.messageText}>메시지</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.downButton]}>
        <AntDesign name="down" style={styles.downText} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  button: {
    width: '42%',
    height: 36,
    borderWidth: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
    borderRadius: 4,
  },
  followButton: {
    backgroundColor: '#405de6',
  },
  followText: {
    color: '#FFF',
  },
  alreadyFollowButton: {
    backgroundColor: 'gray',
    opacity: 0.7,
  },
  messageButton: {
    backgroundColor: '#FFF',
  },
  messageText: {
    color: '#000',
  },
  downButton: {
    width: '10%',
    color: '#000',
    paddingBottom: 0,
  },
  downText: {
    fontSize: 16,
  },
});
