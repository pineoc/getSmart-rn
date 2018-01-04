/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = 'How to Think and Act\nLike the Most Successful People';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.titleCont}>
          <Text style={styles.title}>
            {'GET\nSMART'}
          </Text>
        </View>
        <View style={styles.subTitleCont}>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D0111B',
  },
  titleCont: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subTitleCont: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
    textAlign: 'left',
    color: 'white',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
