import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';
import {FriendsProfileData} from '../components/Database';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Activity = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.activityHeader}>
        <MaterialIcons
          name="arrow-back-ios"
          onPress={() => navigation.goBack()}
          style={styles.iconBack}
        />
        <Text style={styles.headerTitle}>알림</Text>
      </View>

      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <ActivityThisWeek />
        <Text style={styles.activityPrevious}>이전 활동</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => (
          <ActivityPrevious data={data} key={index} />
        ))}
        <Text style={styles.recommendTitle}>회원님을 위한 추천</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  iconBack: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede',
    padding: 10,
  },
  activityHeader: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede',
    padding: 10,
  },
  activityPrevious: {
    fontWeight: 'bold',
  },
  recommendTitle: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});

export default Activity;
