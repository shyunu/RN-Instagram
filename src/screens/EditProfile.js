import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.editText}>프로필 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.doneText}>완료</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.changePhotoText}>프로필 사진 바꾸기</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>이름</Text>
          <TextInput
            placeholder="이름"
            defaultValue={name}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>사용자 이름</Text>
          <TextInput
            placeholder="사용자 이름"
            defaultValue={accountName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>웹사이트</Text>
          <TextInput placeholder="웹사이트" style={styles.textInput} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>소개</Text>
          <TextInput placeholder="소개" style={styles.textInput} />
        </View>
      </View>

      <View style={styles.extraOptions}>
        <Text style={styles.optionText}>프로페셔널 계정으로 전환</Text>
        <Text style={styles.optionText}>개인정보 설정</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  cancelText: {
    fontSize: 16,
  },
  editText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneText: {
    color: '#3493d9',
    fontSize: 16,
  },
  profileImageContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  changePhotoText: {
    color: '#3493d9',
    marginTop: 10,
  },
  inputContainer: {
    padding: 10,
  },
  inputGroup: {
    paddingVertical: 10,
  },
  labelText: {
    opacity: 0.5,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#cdcdcd',
  },
  extraOptions: {},
  optionText: {
    marginVertical: 5,
    padding: 10,
    color: '#3493d9',
  },
});

export default EditProfile;
