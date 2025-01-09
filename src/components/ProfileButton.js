import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const ProfileButton = ({id}) => {
  const [follow, setFollow] = useState(false);

  return (
    <>
      {id === 0 ? (
        <View></View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setFollow(prev => !prev)}
            style={{width: '42%'}}>
            <View
              style={{
                width: '100%',
                height: 30,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493d9',
                borderWidth: follow ? 1 : 0,
                borderColor: follow ? '#dedede' : null,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: follow ? 'black' : 'white'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '42%',
              height: 35,
              borderWidth: 1,
              borderColor: '#dedede',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text>메세지</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 35,
              borderWidth: 1,
              borderColor: '#dedede',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Feather
              name="chevron-down"
              style={{fontSize: 20, color: 'black'}}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileButton;
