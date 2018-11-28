import React from 'react';
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'

import { connect } from 'react-redux'

class LoginForm extends React.Component {
	
	userLogin = () => {
		this.props.logIn(this.props.email, this.props.password);
	}
	rememberLogin = () => {
		this.props.rememberUser();
	}
	
	showAlert = (message) => {
		Alert.alert(
		  'Status',
		  message,
		  [
			{text: 'OK', onPress: () => {this.props.alertOk()}},
		  ],
		  { cancelable: false }
		)	
	}
	
	render() {
		if (this.props.isLogin) {
			this.showAlert(this.props.LoginError);
		}
		console.log(this.props.checkRemember)
		console.log(this.props.email + ' - email')
		console.log(this.props.password + ' - pass')
		return (
			<View style = {styles.container}>	
				<View style = {styles.field}>
					<Text>Email</Text>	
					<TextInput
						style = {styles.fieldText}
						keyboardType = 'email-address'
						placeholder = 'Input Email Address'
						onChangeText = {this.props.checkEmail}
						onBlur = {this.props.rememberPass}
						value = {this.props.email}
					/>
					<Text style = {styles.error}>{this.props.emailError}</Text>
				</View>
				
				<View style = {styles.field}>
					<Text>Password</Text>	
					<TextInput
						style = {styles.fieldText}
						placeholder = 'Input Password'
						secureTextEntry = {true}
						onChangeText = {this.props.checkPass}
						value = {this.props.password}
					/>
					<Text style = {styles.error}>{this.props.passError}</Text>
				</View>
				
				<CheckBox
					title = "Remember me"
					checked = {this.props.checkRemember}
					onPress = {this.rememberLogin.bind(this)}
				/>
				
				<View style = {styles.field}>
					<Button
						color = "#714DB2"
						disabled = {!this.props.emailValid || !this.props.passValid}
						title = "submit"
						onPress = {this.userLogin.bind(this)}
					/>
				</View>		
			</View>
		);
	}
}

/*
*This function will get the data of the state from 
*the reducer('./src/reducer/index') to be used for this page
*/
function mapStateToProps(state) {
    return {
        email: state.email,
		emailError: state.emailError,
		password: state.password,
		passError: state.passError,
		emailValid: state.emailValid,
		passValid: state.passValid,
		isLogin: state.isLogin,
		LoginError: state.LoginError,
		checkRemember: state.checkRemember
    }
}

/*
*This function will send the data of the state from 
*the reducer('./src/reducer/index')
*/
function mapDispatchToProps(dispatch) {
    return {
        checkEmail: (email) => dispatch({ type: 'CHECK_EMAIL', email }),
		checkPass: (password) => dispatch({ type: 'CHECK_PASS', password }),
		logIn: (email, password) => dispatch({ type: 'SIGN_IN', email, password }),
		rememberUser: () => dispatch({ type: 'REMEMBER_USER' }),
		rememberPass: () => dispatch({ type: 'REMEMBER_PASS' }),
		alertOk: () => dispatch({ type: 'ALERT_OK' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

const styles = StyleSheet.create({
  container: {
	flex: 1,
	flexDirection: 'column',
	alignItems: 'stretch',
	paddingHorizontal: 10,
  },
  field: {	
	fontWeight: 'bold',
	paddingVertical: 5,
  },
  fieldText: {
	backgroundColor: '#fff',
	paddingHorizontal: 10,
	borderWidth: 1,
	borderRadius: 4,
  },
  buttonContainer: {
	backgroundColor: '#714DB2',
	paddingVertical: 5,
  },
  buttonText: {
	textAlign: 'center',
	color: '#ffff',
  },
  error: {
	color: 'red',
	fontStyle: 'italic'
  },
});
