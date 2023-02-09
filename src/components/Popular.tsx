import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, SIZES} from '../../Constants';
import {popular} from '../popular';

const Categories = () => {
  return (
    <View style={{paddingTop: 5}}>
      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        Popular
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {popular.map((pop, index) => (
          <View
            key={`popular ${index}`}
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
                height: 110,
                paddingStart: 5,
                paddingEnd: 5,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: pop.image}}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {pop.name}
                </Text>

                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.primary,
                    textAlign: 'center',
                  }}>
                  {pop.price}
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
