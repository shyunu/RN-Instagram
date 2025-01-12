import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './videosDatabase';
import SingleReel from './SingleReel';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
      style={styles.swiperFlatlist}
    />
  );
};

const styles = StyleSheet.create({
  swiperFlatlist: {
    bottom: 45,
  },
});

export default ReelsComponent;
