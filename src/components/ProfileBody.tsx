import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Friend} from '../types/friend';

type FriendProfileProps = Pick<
  Friend,
  'name' | 'profileImage' | 'followers' | 'following' | 'posts'
>;

const ProfileBody = ({
  name,
  profileImage,
  followers,
  following,
  posts,
}: FriendProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} alt={name} style={styles.profileImage} />
        <Text style={styles.profileText}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{posts}</Text>
          <Text style={styles.statText}>게시물</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{followers}</Text>
          <Text style={styles.statText}>팔로워</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{following}</Text>
          <Text style={styles.statText}>팔로잉</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 8,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profileImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  profileText: {
    fontWeight: 'bold',
    color: 'black',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  stat: {
    width: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statCount: {
    fontWeight: 'bold',
    color: 'black',
  },
  statText: {
    color: 'black',
  },
});
