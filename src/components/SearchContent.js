import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const searchData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
      require('../../assets/images/post12.jpeg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
      require('../../assets/images/post15.jpeg'),
    ],
  },
];

const SearchContent = ({getData}) => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {/* 피드 6개 보이기 */}
            {data.id === 0 ? (
              <View style={styles.sixFeedContainer}>
                {data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      key={imageIndex}
                      onPressIn={() => getData(imageData)}
                      onPressOut={() => getData(null)}
                      style={styles.sixFeedWrap}>
                      <Image source={imageData} style={styles.sixFeedImage} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {/* 피드 4개(왼쪽) 그리고 긴피드 1개(오른쪽) */}
            {data.id === 1 ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.fiveFeedContainer}>
                  {data.images.slice(0, 4).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        onPressIn={() => getData(imageData)}
                        onPressOut={() => getData(null)}
                        style={styles.fiveFeedWrap}>
                        <Image
                          source={imageData}
                          style={styles.fiveFeedImage}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={styles.fiveFeedWrapLong}
                  onPressIn={() => getData(data.images[4])}
                  onPressOut={() => getData(null)}>
                  <Image
                    source={data.images[4]}
                    style={styles.fiveFeedImageLong}
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            {/* 큰피드 1개(왼쪽) 그리고 위아래피드 2개(오른쪽) */}
            {data.id === 2 ? (
              <View style={styles.threeFeedContainer}>
                <TouchableOpacity
                  style={styles.threeFeedWrapBig}
                  onPressIn={() => getData(data.images[2])}
                  onPressOut={() => getData(null)}>
                  <Image
                    source={data.images[2]}
                    style={styles.threeFeedImageBig}
                  />
                </TouchableOpacity>
                <View style={styles.threeFeedWrap}>
                  {data.images.slice(0, 2).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        onPressIn={() => getData(imageData)}
                        onPressOut={() => getData(null)}
                        style={styles.threeFeedImageWrap}>
                        <Image
                          source={imageData}
                          style={styles.threeFeedImage}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  // 6개피드
  sixFeedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  sixFeedWrap: {
    paddingBottom: 2,
    width: '33%',
  },
  sixFeedImage: {
    width: '100%',
    height: 150,
  },
  // 5개피드
  fiveFeedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '66.5%',
    justifyContent: 'space-between',
  },
  fiveFeedWrap: {
    paddingBottom: 2,
    width: '49.5%',
  },
  fiveFeedImage: {
    width: '100%',
    height: 150,
  },
  fiveFeedWrapLong: {
    marginLeft: 2,
    width: '33%',
  },
  fiveFeedImageLong: {
    width: '100%',
    height: 300,
  },
  // 3개피드
  threeFeedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  threeFeedWrapBig: {
    paddingRight: 2,
    width: '66.5%',
  },
  threeFeedImageBig: {
    width: '100%',
    height: 300,
  },
  threeFeedWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '33%',
    justifyContent: 'space-between',
  },
  threeFeedImageWrap: {
    paddingBottom: 2,
    width: '100%',
  },
  threeFeedImage: {
    width: '100%',
    height: 150,
  },
});

export default SearchContent;
