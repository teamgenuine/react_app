import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import store from './src/store'
import { Provider } from 'react-redux'

import Login from './src/Login';


export default class App extends React.Component {
	render() {
		return (
			<Provider store = {store}>
				<View style = {styles.view}>				
					<Login />
				</View>
			</Provider>
		);
	}
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
	alignItems: 'stretch',
	backgroundColor: 'powderblue',
  },
});
