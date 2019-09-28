import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from './styles/index.css';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    onChangeUserName = (text) => {
        this.setState({ username: text });
    }

    onChangePassword = (text) => {
        this.setState({ password: text });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../public/Spotify_Logo_CMYK_Green.png')}
                    style={{ width: screenWidth * 0.7, height: screenWidth * 0.21, marginBottom: 25 }}
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
                <TouchableOpacity
                    style={styles.btnSignUp}
                >
                    <Text style={styles.textSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;
