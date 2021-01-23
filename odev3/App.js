/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View >
      <Text >Adınız</Text>
      <TextInput style={styles.text}></TextInput>
      <Text >Soyadınız</Text>
      <TextInput style={styles.text}></TextInput>
      <Text >Yaşınız</Text>
      <TextInput style={styles.text}></TextInput>
      <Text >Eposta Adresiniz</Text>
      <TextInput style={styles.text}></TextInput>
      <Text >Şifre</Text>
      <TextInput style={styles.text}></TextInput>
      <Text >Şifre Tekrar</Text>
      <TextInput style={styles.text}></TextInput>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text:{
    minHeight:70,
    borderWidth:1
  },
});

export default App;
