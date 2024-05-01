import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityRecommend from '../components/ActivityRecommend';
import {FriendsProfileData} from '../../data/activityData';

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.activityHeaderText}>활동</Text>
      <ScrollView>
        <ActivityThisWeek />
        <Text style={styles.activityText}>이전 활동</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          return <ActivityPrevious data={data} key={index} />;
        })}
        <Text style={styles.activityText}>회원님을 위한 추천</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => {
          return <ActivityRecommend data={data} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
  },
  activityHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede',
  },
  activityText: {
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
