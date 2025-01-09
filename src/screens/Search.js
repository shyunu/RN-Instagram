import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {StyleSheet} from 'react-native';

const Search = () => {
  const [image, setImage] = useState(null);
  const getData = img => {
    setImage(img);
  };
  const statusBarHeight = getStatusBarHeight();

  // 모달 정중앙에 배치하기
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* SearchInput */}
        <SearchInput />
        {/* SearchContent */}
        <SearchContent getData={getData} />

        {image !== null ? (
          // 모달창
          <View style={styles.modalContainer}>
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View style={styles.modal}>
              <View style={styles.modalHeader}>
                <Image source={image} style={styles.modalImage} />
                <View style={styles.modalHeaderText}>
                  <Text style={styles.modalHeaderTextBold}>친구 아이디</Text>
                </View>
              </View>
              <Image source={image} style={styles.modalImageFull} />
              <View style={styles.modalFooter}>
                <Ionic name="heart-outline" style={styles.modalIcon} />
                <Ionic name="person-circle-outline" style={styles.modalIcon} />
                <Feather name="navigation" style={styles.modalIcon} />
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.8)',
  },
  modal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '90%',
    top: Dimensions.get('window').height / 6,
    left: Dimensions.get('window').width / 18,
    height: 465,
    borderRadius: 15,
    zIndex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  modalHeaderText: {
    paddingLeft: 8,
  },
  modalHeaderTextBold: {
    fontSize: 13,
    fontWeight: '600',
  },
  modalImageFull: {
    width: '100%',
    height: '80%',
  },
  modalFooter: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  modalIcon: {
    fontSize: 26,
  },
});

export default Search;
