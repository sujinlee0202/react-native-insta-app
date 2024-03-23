import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import Modal from '../components/Modal';

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = (img: any) => {
    setImage(img);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/** Search Input */}
        <SearchInput />
        {/** Search Content */}
        <SearchContent getData={getData} />
      </ScrollView>
      {/** 모달 */}
      {image ? <Modal image={image} /> : null}
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
