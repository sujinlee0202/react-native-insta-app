import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RouteProp} from '@react-navigation/native';
import {navigatorType} from '../components/Stories';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  route: RouteProp<navigatorType, 'Status'>;
  navigation: NativeStackNavigationProp<navigatorType, 'Status'>;
}

const Status = ({route, navigation}: Props) => {
  const {name, image} = route.params;

  const handlePressClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.timeProgress} />

      <View style={styles.profile}>
        <View style={styles.profileImageContainer}>
          <Image source={image} style={styles.profileImage} />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <TouchableOpacity onPress={handlePressClose}>
            <Ionicons name="close" style={styles.close} />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={image} style={styles.mainImage} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
  },
  timeProgress: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  profile: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  profileImageContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 100,
    backgroundColor: 'orange',
    width: '92%',
    height: '92%',
    resizeMode: 'cover',
  },
  profileTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  nameText: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  close: {
    color: 'white',
    opacity: 0.6,
    fontSize: 15,
  },
  mainImage: {
    position: 'absolute',
    width: '100%',
    height: 600,
  },
});
