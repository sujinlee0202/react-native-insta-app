import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {searchData} from '../../data/searchData';

const SearchContent = () => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {/** 1번 UI */}
            {data.id === 0 ? (
              <View style={styles.contentContainer}>
                {data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      key={imageIndex}
                      style={styles.imageWrapper}>
                      <Image source={imageData} style={styles.image} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {/** 2번 UI */}
            {data.id === 1 ? (
              <View style={styles.secondContainer}>
                <View style={styles.secondContainerLeft}>
                  {data.images.slice(0, 4).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        style={styles.secondImageWrapper}>
                        <Image source={imageData} style={styles.image} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity style={styles.secondLongImageWrapper}>
                  <Image source={data.images[4]} style={styles.longImage} />
                </TouchableOpacity>
              </View>
            ) : null}

            {/** 3번 UI */}
            {data.id === 2 ? (
              <View style={styles.thirdContainer}>
                <TouchableOpacity style={styles.bigImageWrapper}>
                  <Image source={data.images[2]} style={styles.bigImage} />
                </TouchableOpacity>
                <View style={styles.thirdContainerRight}>
                  {data.images.slice(0, 2).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        style={styles.thirdImageWrapper}>
                        <Image source={imageData} style={styles.image} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageWrapper: {
    width: '33%',
    paddingBottom: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondContainerLeft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '66.5%',
    justifyContent: 'space-between',
  },
  secondImageWrapper: {
    paddingBottom: 2,
    width: '49.5%',
  },
  secondLongImageWrapper: {
    marginLeft: 2,
    width: '33%',
  },
  longImage: {
    width: '100%',
    height: 302,
  },
  thirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigImageWrapper: {
    marginRight: 2,
    width: '66.5%',
  },
  bigImage: {
    width: '100%',
    height: 302,
  },
  thirdContainerRight: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '33%',
    justifyContent: 'space-between',
  },
  thirdImageWrapper: {
    paddingBottom: 2,
    width: '100%',
  },
});
