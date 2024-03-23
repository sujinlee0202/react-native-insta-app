import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/** Search Input */}
        <SearchInput />
        {/** Search Content */}
        <SearchContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
});
