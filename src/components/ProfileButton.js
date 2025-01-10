import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const ProfileButton = ({id, name, accountName, profileImage}) => {
  const [follow, setFollow] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      {id === 0 ? (
        <View style={styles.myAccountContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('EditProfile', {
                name,
                accountName,
                profileImage,
              });
            }}
            style={styles.myAccountWrap}>
            <View style={styles.editProfile}>
              <Text style={styles.editProfileText}>프로필 수정</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.accountContainer}>
          <TouchableOpacity
            onPress={() => setFollow(prev => !prev)}
            style={styles.accountFollowWrap}>
            <View
              style={[
                styles.followButton,
                {
                  backgroundColor: follow ? null : '#3493d9',
                  borderWidth: follow ? 1 : 0,
                  borderColor: follow ? '#dedede' : null,
                },
              ]}>
              <Text style={{color: follow ? 'black' : 'white'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.messageButton}>
            <Text>메세지</Text>
          </View>
          <View style={styles.downButton}>
            <Feather name="chevron-down" style={styles.downIcon} />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  myAccountContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  myAccountWrap: {
    width: '100%',
  },
  editProfile: {
    width: '100%',
    height: 35,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfileText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
  },
  accountContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  accountFollowWrap: {
    width: '42%',
  },
  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageButton: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  downButton: {
    width: '10%',
    height: 35,
    borderWidth: 1,
    borderColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  downIcon: {
    fontSize: 20,
    color: 'black',
  },
});

export default ProfileButton;
