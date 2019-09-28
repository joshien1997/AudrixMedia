import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from './styles/index.css';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            isPassEqual: false,
        };
    }

    onChangeUserName = (text) => {
        this.setState({ username: text });
    }

    onChangePassword = (text) => {
        this.setState({ password: text });
    }

    onChangePasswordConfirm = (text) => {
        this.setState({ passwordConfirm: text }, () => this.checkPasswordConfirm(this.state.passwordConfirm));
    }

    checkPasswordConfirm = (passwordConfirm) => {
        const { password } = this.state;
        if (password !== passwordConfirm) {
            this.setState({
                isPassEqual: false,
            });
        } else {
            this.setState({
                isPassEqual: true,
            });
        }
    }

    render() {
        const { username, password, passwordConfirm, isPassEqual } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../public/Spotify_Logo_CMYK_Green.png')}
                    style={{width: screenWidth * 0.6, height: screenWidth * 0.18, marginBottom: 25}}
                    resizeMode={'cover'}
                />
                <TextInput
                    placeholder="Your username"
                    autoCapitalize="none"
                    onChangeText={this.onChangeUserName}
                    value={username}
                    style={styles.inputText}
                    placeholderTextColor={"#ccc"}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Your password"
                    autoCapitalize="none"
                    onChangeText={this.onChangePassword}
                    value={password}
                    style={styles.inputText}
                    placeholderTextColor={"#ccc"}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm your username"
                    autoCapitalize="none"
                    onChangeText={this.onChangePasswordConfirm}
                    value={passwordConfirm}
                    style={styles.inputText}
                    placeholderTextColor={"#ccc"}
                />
                {
                    !isPassEqual ? <Text style={styles.textNote}>Password not match</Text> : null
                }
                <TouchableOpacity
                    style={styles.btnSignUp}
                >
                    <Text style={styles.textSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Register;
