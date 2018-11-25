import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Login from "./pages/Login";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		
		<Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FF',
    alignItems: 'stretch',
  },
  logo_container: {
	flexDirection: 'row',
	alignItems: 'stretch',
	justifyContent: 'center',
	padding: 100,
  },
  logo_image: {
	flexDirection: 'column',
	justifyContent: 'center',  
  }
});

