import React from 'react';
import {Image, Linking, TouchableHighlight, View} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableHighlight
        onPress={() => Linking.openURL('https://mcdonalds.ge/ge/home')}>
        <Image
          source={{
            uri: 'https://img.icons8.com/color/256/mcdonalds.png',
          }}
          style={{
            width: 51,
            height: 45,
          }}
        />
      </TouchableHighlight>
      <View>
        <Image
          source={{
            uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
          }}
          style={{
            width: 51,
            height: 45,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
