import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import PushNotification from 'react-native-push-notification';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'insta-channel',
      channelName: 'Insta Channel',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.logoText}>Instagram</Text>
        <View style={styles.headerIcons}>
          <Ionic
            name="heart-outline"
            onPress={() => navigation.push('Activity')}
            style={styles.icon}
          />
          <Ionic name="paper-plane-outline" style={styles.icon} />
        </View>
      </View>
      <ScrollView>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 25,
    fontWeight: '500',
  },
  headerIcons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    left: 10,
  },
  icon: {
    fontSize: 24,
    paddingHorizontal: 8,
  },
});

export default Home;
