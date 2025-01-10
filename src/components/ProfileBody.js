import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const ProfileBody = ({
  name,
  profileImage,
  post,
  followers,
  following,
  accountName,
}) => {
  return (
    <View>
      {accountName ? (
        <View style={styles.headerContainer}>
          <View style={styles.headerWrap}>
            <Text style={styles.headerAccount}>{accountName}</Text>
            <Feather name="chevron-down" style={styles.downIcon} />
          </View>
          <View style={styles.headerWrap}>
            <Feather name="plus-square" style={styles.plusIcon} />
            <Feather name="menu" style={styles.menuIcon} />
          </View>
        </View>
      ) : null}
      <View style={styles.profileContainer}>
        <View style={styles.profileWrap}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.profileName}>{name}</Text>
        </View>
        <View style={styles.profileWrap}>
          <Text style={styles.profileNum}>{post}</Text>
          <Text>게시물</Text>
        </View>
        <View style={styles.profileWrap}>
          <Text style={styles.profileNum}>{followers}</Text>
          <Text>팔로워</Text>
        </View>
        <View style={styles.profileWrap}>
          <Text style={styles.profileNum}>{following}</Text>
          <Text>팔로윙</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAccount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  downIcon: {
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  plusIcon: {
    fontSize: 25,
    color: 'black',
    paddingHorizontal: 5,
  },
  menuIcon: {
    fontSize: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  profileWrap: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  profileName: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  profileNum: {
    fontWeight: 'bold',
  },
});

export default ProfileBody;
