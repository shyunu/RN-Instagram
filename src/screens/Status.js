import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {StyleSheet} from 'react-native';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;

  const statusBarHeight = getStatusBarHeight() + 20;

  // progress bar (animation)
  const progress = useRef(new Animated.Value(0)).current; // Animated Value 생성
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressFill, {width: progressAnimation}]}
        />
      </View>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image source={image} style={styles.profileImage} />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
  },
  progressBar: {
    height: 3,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 0,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 0,
  },
  profileImageContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 100,
    backgroundColor: 'orange',
    width: '92%',
    height: '92%',
    resizeMode: 'cover',
  },
  headerTextContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  closeIcon: {
    color: 'white',
    fontSize: 15,
    opacity: 0.6,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 600,
  },
});

export default Status;
