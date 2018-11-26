import React from 'react';
import { StyleSheet, TextInput, Text, Button, Alert, Picker,View } from 'react-native';
import { CheckBox } from 'react-native-elements'


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
			tempEmail: "bananaman_18@vananaz.com",
			tempPass: "abcd1234",
			checked: true,
		};
		
		this.emailValidation = this.emailValidation.bind(this);
		this.passValidation = this.passValidation.bind(this);
		this.autoFill = this.autoFill.bind(this);
		this.userLogin = this.userLogin.bind(this)
	}
	
	emailValidation = (email) => {	
		this.setState({email});
		
		let user = email;
		let emailValid = user.match(/^([A-Za-z0-9_]+)@([A-Za-z0-9]+\.)+([A-Za-z0-9]{2,})$/);
		this.setState({emailValid});
		
		let emailError = emailValid ? '': 'Not correct format for email address';		
		this.setState({emailError});		
	}
	
	
	passValidation = (password) => {
		this.setState({password});
		
		let pass = password;
		
		passValid = !(pass.length < 6 || pass.length > 12);
		this.setState({passValid});
		
		passError = passValid ? '' : '6 - 12 length';		
		this.setState({passError});
	}
	
	
	autoFill = () => {		
		if (this.state.checked) {		
			let setEmail = this.state.email;
			let email = setEmail.toLowerCase();
			
			console.log(setEmail);
			console.log(email);
			
			if (email === this.state.tempEmail){ 
				this.setState({passValid: true});
				this.setState({password: this.state.tempPass});
				this.setState({passError: ''});
			}
		}
	}
	
	userLogin = () => {
		let setEmail = this.state.email;
		let email = setEmail.toLowerCase();
		let pass = this.state.password;
		
		if ((email === this.state.tempEmail) && (pass === this.state.tempPass)) {
			//this.setState({status: "success"})
			this.showAlert();
		} else {
			this.setState({status: "Incorrect Email Address or Password "});
		}
	}
	
	showAlert = () => {
		Alert.alert(
		  'Status',
		  'Log in Success',
		  [
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  { cancelable: false }
		)	
	}

	render() {
		return (
		  <View style = {styles.container}>
			
			<Text style = {styles.field}>Email</Text>	
			<TextInput
				style = {styles.fieldText}
				onChangeText = {this.emailValidation}
				onBlur = {this.autoFill}
				placeholder = 'Input Email Address'
				value = {this.state.email}
			/>
			<Text style={styles.error}>{this.state.emailError}</Text>					
			
			<CheckBox
				title = "Remember me"
				checked = {this.state.checked}
				onPress = {() => this.setState({checked: !this.state.checked})}
			/>
			
			<Text style={styles.field}>Password</Text>	
			<TextInput
				style = {styles.fieldText}
				secureTextEntry = {true}
				onChangeText = {this.passValidation}
				placeholder = 'Input Password'
				value = {this.state.password}
			/>
			<Text style={styles.error}>{this.state.passError}</Text>
						
			<Button
				color = "#714DB2"
				disabled = {!this.state.emailValid || !this.state.passValid}
				title = "Sign In"
				onPress = {this.userLogin}
			/>
			
			<Text style={styles.error}>{this.state.status}</Text>
			
		  </View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingRight: 15,
		paddingLeft: 15,
	},
	field: {
		flexDirection: 'row',
		alignItems: 'stretch',
		fontWeight: 'bold',		
	},
	fieldText: {
		flexDirection: 'row',
		alignItems: 'stretch',
		backgroundColor: '#fff',
		paddingRight: 5,
		paddingLeft: 5,
		borderWidth: 1,
		borderRadius: 4,
	},
	error: {
		color: 'red',
		fontStyle: 'italic'
	},
	success: {
		color: 'blue',
		fontSize: 20,
	},
});


