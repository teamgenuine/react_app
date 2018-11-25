import React from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
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
	}
	
	emailValidation = (email) => {
		this.setState({email});
		
		let user = this.state.email;
		
		let emailValid = user.match(/^([A-Za-z0-9_]+)@([A-Za-z0-9]+\.)+([A-Za-z0-9]{1,})$/);
		console.log(emailValid);
		this.setState({emailValid});
		
		let emailError = emailValid ? '': 'Not correct format for email address';		
		this.setState({emailError});		
	}
	
	passValidation = (password) => {
		this.setState({password});
		
		let pass = this.state.password;
		
		passValid = !(pass.length < 5 || pass.length > 11);
		this.setState({passValid});
		
		passError = passValid ? '' : '6 - 12 length';		
		this.setState({passError});
	}
	
	
	autoFill = (email) => {		
		if (this.state.checked) {
			this.setState({email})			
			let setEmail = this.state.email;
			let email = setEmail.toLowerCase();
			
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
			this.setState({status: "success"})
		} else {
			this.setState({status: "Incorrect Email Address or Password "});
		}
	}

	render() {
		return (
		  <View style = {styles.container}>
			
			<Text style = {styles.field}>Email</Text>	
			<TextInput
				style = {styles.fieldText}
				onChangeText = {this.emailValidation.bind(this)}	
				//onBlur = {this.autoFill.bind(this)}				
				placeholder = 'Input Email Address'
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
				onChangeText = {this.passValidation.bind(this)}
				placeholder = 'Input Password'
				value = {this.state.password}
			/>
			<Text style={styles.error}>{this.state.passError}</Text>
						
			<Button
				color = "#714DB2"
				disabled = {!this.state.emailValid || !this.state.passValid}
				title = "Sign In"
				onPress = {this.userLogin.bind(this)}
			/>
			
			
			<Text style={styles.success}>{this.state.status}</Text>
			
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
	},
	success: {
		color: 'blue',
		fontSize: 20,
	},
});


