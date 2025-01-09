import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
      <Ionic name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={'#909090'}
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
    flexDirection: 'row',
  },
  searchIcon: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25,
  },
  searchInput: {
    width: '94%',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
});

export default SearchInput;
