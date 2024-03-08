import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>Instagram</Text>
        </View>
        <View style={styles.topIcon}>
          <FontAwesome name="plus-square-o" style={styles.plusIcon} />
          <Feather name="navigation" style={styles.navIcon} />
        </View>
      </View>
      <ScrollView>
        {/** Stories */}
        {/** Posts */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logo: {
    fontSize: 25,
    fontWeight: '500',
  },
  topIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 24,
    paddingHorizontal: 15,
  },
  navIcon: {
    fontSize: 24,
  },
});
