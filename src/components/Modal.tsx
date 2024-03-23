import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

interface Props {
  image: any;
}

const Modal = ({image}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.modalConatiner}>
      <StatusBar backgroundColor="#525252" barStyle="dark-content" />
      <View
        style={[
          styles.container,
          {
            top: windowHeight / 6,
            left: windowWidth / 18,
          },
        ]}>
        <View style={styles.header}>
          <Image source={image} style={styles.profileImage} />
          <Text style={styles.profileText}>친구</Text>
        </View>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalConatiner: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingRight: 16,
  },
  profileText: {
    width: 30,
    height: 30,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
});
