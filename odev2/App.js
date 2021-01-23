/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
    <View>
        <Text >Merhaba</Text>
        <Text >Ben Anıl Türkdoğan</Text>
        <Text >Darıca Deniz Yıldızları Lisesi'nden mezunum</Text>
        <Text >Yaşım 20</Text>
        <Text >Malatya'da doğdum</Text>
        <Text >Hobilerim arasında spor yapmak var</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
