import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;

  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>프로필 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: '#3493d9'}}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text style={{color: '#3493d9', marginTop: 10}}>
          프로필 사진 바꾸기
        </Text>
      </View>

      <View style={{padding: 10}}>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5}}>이름</Text>
          <TextInput
            placeholder="이름"
            defaultValue={name}
            style={{fontSize: 16, borderBottomWidth: 1, borderColor: '#cdcdcd'}}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5}}>사용자 이름</Text>
          <TextInput
            placeholder="사용자 이름"
            defaultValue={accountName}
            style={{fontSize: 16, borderBottomWidth: 1, borderColor: '#cdcdcd'}}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5}}>웹사이트</Text>
          <TextInput
            placeholder="웹사이트"
            style={{fontSize: 16, borderBottomWidth: 1, borderColor: '#cdcdcd'}}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5}}>이름</Text>
          <TextInput
            placeholder="소개"
            style={{fontSize: 16, borderBottomWidth: 1, borderColor: '#cdcdcd'}}
          />
        </View>
      </View>

      <View>
        <Text style={{marginVertical: 5, padding: 10, color: '#3493d9'}}>
          프로페셔널 계정으로 전환
        </Text>
        <Text style={{marginVertical: 5, padding: 10, color: '#3493d9'}}>
          개인정보 설정
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
