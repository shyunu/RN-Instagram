import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../../components/ReelsComponent';

const WatchReels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <ReelsComponent />
    </SafeAreaView>
  );
};

export default WatchReels;
