import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" style={styles.searchIcon} />
      <TextInput placeholder="Search..." style={styles.textInput} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '94%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingLeft: 35,
    paddingRight: 10,
    borderRadius: 8,
  },
  searchIcon: {
    fontSize: 20,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
