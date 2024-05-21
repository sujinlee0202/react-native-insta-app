import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Friend} from '../types/friend';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';

type RootStackParamList = {
  FriendProfile: Friend;
};

type FriendProfileRouteProp = RouteProp<RootStackParamList, 'FriendProfile'>;
type FriendProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FriendProfile'
>;

type FriendProfileProps = {
  route: FriendProfileRouteProp;
  navigation: FriendProfileNavigationProp;
};

const FriendProfile = ({route, navigation}: FriendProfileProps) => {
  const {name, profileImage, followers, following, posts} = route.params;

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressMenu = () => {};

  return (
    <SafeAreaView style={styles.conatinaer}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={onPressBack}>
            <AntDesign name="arrowleft" style={styles.leftArrow} />
          </TouchableOpacity>
          <Text style={styles.headerIdText}>{name}</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          style={styles.kebabMenu}
          onPress={onPressMenu}
        />
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        followers={followers}
        following={following}
        posts={posts}
      />
      <ProfileButton />
    </SafeAreaView>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({
  conatinaer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  header: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  leftArrow: {
    fontSize: 20,
    color: 'black',
  },
  headerIdText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  kebabMenu: {
    fontSize: 20,
    color: 'black',
  },
});
