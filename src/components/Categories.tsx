import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, SIZES} from '../../Constants';
import {categories} from '../categories';

const Categories = () => {
  return (
    <View style={{paddingTop: 40}}>
      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        Hey
      </Text>
      <Text
        style={{
          fontSize: SIZES.h1,
          color: COLORS.white,
        }}>
        what's up?
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {categories.map((cat, index) => (
          <View
            key={`categories ${index}`}
            style={{
              width: '30%',
              marginBottom: 20,
              paddingBottom: 10,
              paddingTop: 10,
            }}>
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => {}}
              style={{
                backgroundColor: COLORS.gray,
                height: 100,
                paddingStart: 5,
                paddingEnd: 5,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: cat.image}}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;
