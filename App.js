import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Login from "./pages/Login";

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
		<View style = {styles.logo_container}>
			<Image
				source = {require('./assets/Logo.png')}
			/>
		</View>
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
	paddingTop: 30,
	paddingBottom: 30,
  },
});

