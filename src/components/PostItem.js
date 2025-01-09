import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    paddingRight: 10,
    fontSize: 20,
  },
  likesAndComments: {
    paddingHorizontal: 15,
  },
  likesText: {
    paddingVertical: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  commentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentUserImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  commentInput: {
    opacity: 0.5,
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const PostItem = ({data}) => {
  const [like, setLike] = useState(data.isLiked);

  const handleNotification = name => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.addNotificationRequest({
        id: name,
        title: `${name}을 클릭했습니다.`,
        body: name,
      });
    } else {
      PushNotification.getChannels(function (channel_ids) {
        console.log(channel_ids);
      });

      PushNotification.cancelAllLocalNotifications();

      PushNotification.localNotification({
        channelId: 'insta-channel',
        title: `${name}을 클릭했습니다.`,
        message: name,
        bigText:
          'My big text that will be shown when notification is expanded)',
        color: 'red',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => handleNotification(data.postTitle)}>
            <Image source={data.postPersonImage} style={styles.userImage} />
          </TouchableOpacity>
          <View style={{paddingLeft: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {data.postTitle}
            </Text>
          </View>
        </View>
        <Feather name="more-vertical" style={{fontSize: 20}} />
      </View>
      <View style={styles.postImageContainer}>
        <Image source={data.postImage} style={styles.postImage} />
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.actionIcons}>
          <TouchableOpacity onPress={() => setLike(prev => !prev)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={[styles.actionIcon, {color: like ? 'red' : 'black'}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionic name="chatbubble-outline" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="navigation" style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={styles.actionIcon} />
      </View>
      <View style={styles.likesAndComments}>
        <Text>좋아요 {like ? data.likes + 1 : data.likes}개</Text>
        <Text style={{fontWeight: 700, fontSize: 14, paddingVertical: 2}}>
          게시글 설명글입니다.
        </Text>
        <Text style={styles.likesText}>댓글 모두 보기</Text>
        <View style={styles.commentsContainer}>
          <View style={styles.commentInputContainer}>
            <Image
              source={data.postPersonImage}
              style={styles.commentUserImage}
            />
            <TextInput placeholder="댓글 달기..." style={styles.commentInput} />
          </View>
          <View style={styles.postButton}>
            <Text style={{color: '#0095f6'}}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
