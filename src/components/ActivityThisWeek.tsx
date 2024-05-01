import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FriendsProfileData} from '../../data/activityData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Friend} from '../types/friend';

export type navigatorType = {
  FriendProfile: Friend;
};

const ActivityThisWeek = () => {
  const navigation = useNavigation<NativeStackNavigationProp<navigatorType>>();
  const handleProfile = (data: Friend) => {
    navigation.push('FriendProfile', {
      name: data.name,
      profileImage: data.profileImage,
      follow: data.follow,
      posts: data.posts,
      followers: data.followers,
      following: data.following,
    });
  };

  return (
    <>
      <Text style={styles.activityText}>이번 주</Text>
      <View style={styles.followText}>
        {FriendsProfileData.slice(0, 3).map((data: Friend, index) => {
          return (
            <TouchableOpacity
              style={styles.friend}
              key={index}
              onPress={() => handleProfile(data)}>
              <Text style={styles.friendText}>{data.name}</Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;

const styles = StyleSheet.create({
  activityText: {
    fontWeight: 'bold',
    marginVertical: 8,
  },
  followText: {
    display: 'flex',
    flexDirection: 'row',
  },
  friend: {
    marginHorizontal: 2,
  },
  friendText: {
    fontWeight: 'bold',
    color: '#405de6',
  },
});
