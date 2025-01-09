import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

// 스토리정보
const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'haerin',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'minji',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'hyein',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'hani',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 6,
    name: 'daniel',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

const Stories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.storyContainer}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View style={styles.storyWrap}>
              {data.id === 1 ? (
                <View style={styles.addStoryWrap}>
                  <Entypo name="circle-with-plus" style={styles.addIcon} />
                </View>
              ) : null}
              <View style={styles.storyCircle}>
                <Image source={data.image} style={styles.storyProfile} />
              </View>
              <Text></Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    paddingVertical: 20,
  },
  storyWrap: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },
  addStoryWrap: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  addIcon: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  storyCircle: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyProfile: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
});

export default Stories;
