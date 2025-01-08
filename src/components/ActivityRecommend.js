import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ActivityRecommend = ({data}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  const [close, setClose] = useState(false);

  return (
    <View>
      {close ? null : (
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('FriendProfile', {
                name: data.name,
                profileImage: data.profileImage,
                follow: data.follow,
                post: data.posts,
                followers: data.followers,
                following: data.following,
              })
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '64%',
            }}>
            <Image
              source={data.profileImage}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
            <View style={{width: '100%'}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                {data.name}
              </Text>
              <Text style={{fontSize: 14, opacity: 0.5}}>
                {data.accountName}
              </Text>
              <Text style={{fontSize: 14, opacity: 0.5}}>
                회원님을 위한 추천
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {follow ? (
              <TouchableOpacity
                onPress={() => setFollow(prev => !prev)}
                style={{width: follow ? 90 : 68}}>
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
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => setFollow(prev => !prev)}
                  style={{width: follow ? 90 : 68}}>
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
                <TouchableOpacity
                  onPress={() => setClose(true)}
                  style={{paddingHorizontal: 10}}>
                  <AntDesign
                    name="close"
                    style={{fontSize: 14, color: 'black', opacity: 0.8}}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;
