import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import FriendItem from '../components/FriendItem';
import {FriendsProfileData} from '../components/Database';

const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, post, followers, following} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrap}>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={styles.iconBack} />
          </TouchableOpacity>
          <View style={styles.accountTitle}>
            <Text style={styles.accountName}>{name}</Text>
            <Feather name="more-vertical" style={styles.iconMore} />
          </View>
        </View>
        <ProfileBody
          name={name}
          profileImage={profileImage}
          post={post}
          followers={followers}
          following={following}
        />
        <ProfileButton id={1} />
        <Text style={styles.recommendText}>회원님을 위한 추천</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.recommendWrap}>
          {name === FriendsProfileData.name
            ? null
            : FriendsProfileData.map((data, index) => (
                <FriendItem key={index} data={data} name={name} />
              ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  profileWrap: {
    padding: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    fontSize: 20,
    color: 'black',
  },
  accountTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
  },
  accountName: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  iconMore: {
    fontSize: 20,
    color: 'black',
  },
  recommendText: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  recommendWrap: {
    paddingTop: 10,
  },
});

export default FriendProfile;
