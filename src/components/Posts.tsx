import {View} from 'react-native';
import React from 'react';
import {postData} from '../../data/postsData';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <View>
      {postData.map((data, index) => {
        return <PostItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Posts;
