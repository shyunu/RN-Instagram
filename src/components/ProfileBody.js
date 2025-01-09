import {View, Text, Image} from 'react-native';
import React from 'react';

const ProfileBody = ({name, profileImage, post, followers, following}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text style={{paddingVertical: 5, fontWeight: 'bold'}}>{name}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{post}</Text>
        <Text>게시물</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{followers}</Text>
        <Text>팔로워</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{following}</Text>
        <Text>팔로윙</Text>
      </View>
    </View>
  );
};

export default ProfileBody;
