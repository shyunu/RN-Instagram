import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    // console.log('buffering', buffer);
  };

  const onError = error => {
    // console.log('error', error);
  };

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);

  return (
    <View style={styles.singleReelContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={styles.videoWrap}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex === index ? false : true}
          source={item.video}
          muted={mute}
          style={styles.video}
        />
      </TouchableOpacity>
      <Ionic name="volume-mute" style={styles.volumeMuteIcon} />
      <View style={styles.postInfo}>
        <View>
          <TouchableOpacity style={{width: 150}}>
            <View style={styles.titleWrap}>
              <View style={styles.postProfileImageWrap}>
                <Image
                  source={item.postProfile}
                  style={styles.postProfileImage}
                />
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.musicWrap}>
            <Ionic name="musical-note" style={styles.musicIcon} />
            <Text style={styles.musicText}>Original Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          // bottom: 80,
          bottom: 180,
          right: 0,
        }}>
        <TouchableOpacity
          onPress={() => {
            setLike(!like);
          }}
          style={styles.iconAll}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color: 'white'}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconAll}>
          <Ionic name="chatbubble-outline" style={styles.iconWhite} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconAll}>
          <Ionic name="paper-plane-outline" style={styles.iconWhite} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconAll}>
          <Feather name="more-vertical" style={styles.iconWhite} />
        </TouchableOpacity>
        <View style={rightProfileWrap}>
          <Image source={item.postProfile} style={styles.rightProfileImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleReelContainer: {
    width: windowWidth,
    height: windowHeight,
    position: 'relative',
  },
  videoWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  video: {
    width: '100%',
    height: windowHeight - 120,
    // bottom: 180,
    position: 'absolute',
  },
  volumeMuteIcon: {
    fontSize: mute ? 23 : 0,
    color: 'white',
    position: 'absolute',
    top: windowHeight / 3.2,
    left: windowWidth / 2.2,
    backgroundColor: 'rgba(52,52,52,0.9)',
    borderRadius: 100,
    padding: mute ? 10 : 0,
  },
  postInfo: {
    position: 'absolute',
    width: windowWidth,
    zIndex: 1,
    // bottom: 80,
    bottom: 140,
    padding: 10,
  },
  titleWrap: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfileImageWrap: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: 'white',
    margin: 10,
  },
  postProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginHoriziontal: 10,
  },
  musicWrap: {
    flexDirection: 'row',
    padding: 10,
  },
  musicIcon: {
    color: 'white',
    fontSize: 16,
  },
  musicText: {
    color: 'white',
  },
  iconAll: {
    padding: 10,
  },
  iconWhite: {
    color: 'white',
    fontSize: 25,
  },
  rightProfileWrap: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
  },
  rightProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default SingleReel;
