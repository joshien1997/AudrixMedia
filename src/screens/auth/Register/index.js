import React from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles/index.css';
import MediumText from '../../../base/components/Text/MontserratText/MediumText';
import RegularText from '../../../base/components/Text/MontserratText/RegularText';
import SemiBoldText from '../../../base/components/Text/MontserratText/SemiBold';
import KeyBoardAvoidingView from '../../../base/components/KeyBoardAvoidingView';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            isPassEqual: false,
            isFocusedConfirm: false,
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

    onFocusConfirm = () => {
        this.setState({
            isFocusedConfirm: true,
        });
    }

    render() {
        const { username, password, passwordConfirm, isPassEqual, isFocusedConfirm } = this.state;
        return (
            <KeyBoardAvoidingView style={styles.container}>
                <ScrollView style={{flex: 1}} >
                    <View style={styles.title}>
                        <SemiBoldText style={styles.titleText}>Create account</SemiBoldText>
                    </View>

                    <View style={styles.fillField}>
                        <RegularText style={styles.titleFill}>Your username</RegularText>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={this.onChangeUserName}
                            value={username}
                            style={styles.inputText}
                            placeholderTextColor={"#fff"}
                        />
                    </View>

                    <View style={styles.fillField}>
                        <RegularText style={styles.titleFill}>Your password</RegularText>
                        <TextInput
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={this.onChangePassword}
                            value={password}
                            style={styles.inputText}
                            placeholderTextColor={"#fff"}
                        />
                    </View>

                    <View style={styles.fillField}>
                        <RegularText style={styles.titleFill}>Confirm your username</RegularText>
                        <TextInput
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={this.onChangePasswordConfirm}
                            value={passwordConfirm}
                            style={styles.inputText}
                            placeholderTextColor={"#fff"}
                            onFocus={this.onFocusConfirm}
                        />
                        {
                            !isPassEqual && isFocusedConfirm ? <RegularText style={styles.textNote}>Password not match</RegularText> : null
                        }
                    </View>

                    <TouchableOpacity
                        style={styles.btnSignUp}
                    >
                        <MediumText style={styles.textSignUp}>Sign Up</MediumText>
                    </TouchableOpacity>
                </ScrollView>
            </KeyBoardAvoidingView>
        );
    }
}

export default Register;
