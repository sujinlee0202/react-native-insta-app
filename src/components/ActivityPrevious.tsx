import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Friend} from '../types/friend';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  data: Friend;
}
type navigatorType = {
  FriendProfile: Friend;
};

const ActivityPrevious = ({data}: Props) => {
  const [follow, setFollow] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<navigatorType>>();

  const handleProfile = (friend: Friend) => {
    navigation.push('FriendProfile', {
      name: friend.name,
      profileImage: friend.profileImage,
      follow: friend.follow,
      posts: friend.posts,
      followers: friend.followers,
      following: friend.following,
    });
  };

  const handleFollow = () => {
    setFollow(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => handleProfile(data)}>
        <Image source={data.profileImage} style={styles.image} />
        <Text>
          <Text style={styles.friendText}>{data.name}</Text>
          <Text>의 사진 및 동영상을 보려면 팔로우 하세요</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleFollow}
        style={[styles.followButton, follow && styles.followedButton]}>
        <Text style={[styles.followText, follow && styles.followedText]}>
          {follow ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityPrevious;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  profile: {
    width: 240,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  followButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    backgroundColor: '#405de6',
    borderRadius: 10,
  },
  friendText: {
    fontWeight: 'bold',
  },
  followText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  followedButton: {
    backgroundColor: '#e5f4f9',
  },
  followedText: {
    color: '#405de6',
  },
});
