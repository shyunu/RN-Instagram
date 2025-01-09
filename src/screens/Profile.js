import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet} from 'react-native';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View style={styles.plusCircle}>
            <Entypo name="plus" style={styles.plusIcon} />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileBodyContainer}>
        <ProfileBody
          name="shyunu"
          accountName="shyunu"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following="35"
          post="245"
        />
      </View>

      <ProfileButton
        id={0}
        name="shyunu"
        accountName="shyunu"
        profileImage={require('../../assets/images/userProfile.jpeg')}
      />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {circles}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  profileBodyContainer: {
    width: '100%',
    padding: 10,
  },
  plusCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 40,
    color: 'black',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
  },
  scrollView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Profile;
