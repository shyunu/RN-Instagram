import {View, Text} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const postInfo = [
  {
    postTitle: 'shyunu',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 70,
    isLiked: true,
  },
  {
    postTitle: 'haerin',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 333,
    isLiked: true,
  },
  {
    postTitle: 'minji',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 112,
    isLiked: false,
  },
  {
    postTitle: 'hyein',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 280,
    isLiked: true,
  },
  {
    postTitle: 'hani',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 370,
    isLiked: true,
  },
  {
    postTitle: 'daniel',
    postPersonImage: require('../../assets/images/profile1.jpeg'),
    postImage: require('../../assets/images/post6.jpeg'),
    likes: 229,
    isLiked: false,
  },
];

const Posts = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        return <PostItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Posts;
