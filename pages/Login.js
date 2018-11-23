import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: '',
			password: '',
			emailError: '',
			passError: '',
			emailValid: false,
			passValid: false,
		};
	}
	
	emailValidation = (email) => {
		this.setState({email});
		
		let user = this.state.email;
		
		this.setState({emaiValid: user.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)});
		
		emailError = this.state.emailValid ? '': 'Not corret format for email address';		
		
		this.setState({emailError});		
	}
	
	
	passValidation = (password) => {
		this.setState({password});
		
		let pass = this.state.password;
		
		passValid = !(pass.length < 5 || pass.length > 11);
		passError = passValid ? '' : '6 - 12 length';
		
		this.setState({passError});
	}
	
	

	render() {
		return (
		  <View style={styles.container}>
			
			<Text style={styles.field}>Email</Text>	
			<TextInput
				style={styles.field_text}
				onChangeText={this.emailValidation.bind(this)}		
				placeholder='Input Email Address'
			/>
			<Text style={styles.error}>{this.state.emailError}</Text>
			<Text style={styles.error}>{this.state.emailValid}</Text>
			
			<Text style={styles.field}>Password</Text>	
			<TextInput
				style={styles.field_text}
				secureTextEntry={true}
				onChangeText={this.passValidation.bind(this)}
				placeholder='Input Password'
			/>
			<Text style={styles.error}>{this.state.passError}</Text>
			
			
			<Button
				title = "submit"
				disabled = {true}
			/>
		  </View>
		  
		);
	}

}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		flexDirection: 'column',			
		backgroundColor: '#fff',
		paddingRight: 5,
		paddingLeft: 5,
	},
	field: {
		flexDirection: 'row',
		alignItems: 'stretch',
		borderWidth: 2,		
	},
	field_text: {
		flexDirection: 'row',
		alignItems: 'stretch',
		borderWidth: 2,
		paddingRight: 5,
		paddingLeft: 5,
	},
	error: {
		color: 'red',
	},
});


