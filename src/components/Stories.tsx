import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {storyInfo} from '../../data/storyInfo';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Story} from '../type/story';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type navigatorType = {
  Status: Story;
};

const Stories = () => {
  const navigation = useNavigation<NativeStackNavigationProp<navigatorType>>();

  const handlePressStory = (story: Story) => {
    navigation.push('Status', {
      name: story.name,
      id: story.id,
      image: story.image,
    });
  };

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {storyInfo.map((story, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => handlePressStory(story)}>
            <View style={styles.story}>
              {story.id === 1 && (
                <View style={styles.storyPlus}>
                  <Entypo
                    name="circle-with-plus"
                    style={styles.storyPlusIcon}
                  />
                </View>
              )}
              <View style={styles.storyImageContainer}>
                <Image source={story.image} style={styles.storyImage} />
              </View>
              <Text style={styles.storyProfileName}>{story.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  story: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },
  storyPlus: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  storyPlusIcon: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 100,
    overflow: 'hidden',
  },
  storyImageContainer: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  storyProfileName: {
    textAlign: 'center',
  },
});
