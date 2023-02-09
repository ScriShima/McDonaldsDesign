/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Popular from './src/components/Popular';
import {COLORS} from './Constants';

function App(): JSX.Element {
  return (
    <View style={{padding: 26, paddingTop: 40, backgroundColor: COLORS.black}}>
      <Header />
      <Categories />
      <Popular />
    </View>
  );
}

export default App;
