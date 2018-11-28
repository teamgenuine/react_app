import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style = {styles.container}>
				<View style = {styles.logo_container}>
					<Image 
						style = {styles.logo_image}
						source = {require('../assets/Logo.png')}
					/>
				</View>
				
				<LoginForm />
			</KeyboardAvoidingView>
		);
	}
}
const styles = StyleSheet.create({
  container: {
	flex: 1,
    backgroundColor: '#FAF8FF',	
  },
  logo_container: {
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
