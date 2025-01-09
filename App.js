import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import GetData from './src/screens/UploadPost/GetData';
import WatchReels from './src/screens/Reels/WatchReels';
import Activity from './src/screens/Activity';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Status from './src/screens/Status';
import FriendProfile from './src/screens/FriendProfile';
import EditProfile from './src/screens/EditProfile';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            color = 'black';

            if (route.name === 'Home') {
              iconName = 'home';

              if (focused) {
                return <Foundation name={iconName} size={size} color={color} />;
              } else {
                return (
                  <Octicons name={iconName} size={size - 4} color={color} />
                );
              }
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
              return <Ionic name={iconName} size={size} color={color} />;
            } else if (route.name === 'GetData') {
              iconName = focused ? 'plus-square' : 'plus-square';
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'WatchReels') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              return <Ionic name={iconName} size={size} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-outline';
              return <Ionic name={iconName} size={size} color={color} />;
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="GetData" component={GetData} />
        <Tab.Screen name="WatchReels" component={WatchReels} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
