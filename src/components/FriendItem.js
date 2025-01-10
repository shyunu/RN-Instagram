import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FriendItem = ({data, name}) => {
  const [follow, setFollow] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <View>
      {data.name === name || close ? null : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setClose(true)}
            style={styles.closeWrap}>
            <AntDesign name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <Image source={data.profileImage} style={styles.profileImage} />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.accountName}>{data.accountName}</Text>
          <TouchableOpacity
            onPress={() => setFollow(prev => !prev)}
            style={styles.buttonContainer}>
            <View
              style={[
                styles.buttonWrap,
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 2,
    position: 'relative',
  },
  closeWrap: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    fontSize: 20,
    color: 'black',
    opacity: 0.5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  accountName: {
    fontSize: 12,
  },
  buttonContainer: {
    width: '80%',
    paddingVertical: 10,
  },
  buttonWrap: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FriendItem;
