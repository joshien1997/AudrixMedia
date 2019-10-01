import React from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles/index.css';
import MediumText from '../../../base/components/Text/MontserratText/MediumText';
import RegularText from '../../../base/components/Text/MontserratText/RegularText';
import SemiBoldText from '../../../base/components/Text/MontserratText/SemiBold';
import KeyBoardAvoidingView from '../../../base/components/KeyBoardAvoidingView';

const regexCheckEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            isPassed: false,
            isFocusedConfirm: false,
            isLegitEmail: false,
            errorMessage: null,
            isSubmited: false,
        };
    }

    onChangeEmail = (text) => {
        this.setState({ email: text }, () => this.checkEmail(this.state.email));
    }

    onChangePassword = (text) => {
        this.setState({ password: text }, () => this.checkPassword(this.state.password));
    }

    onChangePasswordConfirm = (text) => {
        this.setState({ passwordConfirm: text }, () => this.checkPassword(this.state.passwordConfirm));
    }

    checkEmail = (email) => {
        if (email !== '' && regexCheckEmail.test(String(email).toLowerCase())) {
            this.setState({
                isLegitEmail: true,
            });
        } else {
            this.setState({
                isLegitEmail: false,
            });
        }
    }

    checkPassword = (param) => {
        const { password, passwordConfirm } = this.state;
        if (param !== '' && param !== passwordConfirm || param !== password) {
            this.setState({
                isPassed: false,
            });
        } else {
            this.setState({
                isPassed: true,
            });
        }
    }

    onFocusedConfirm = () => {
        this.setState({
            isFocusedConfirm: true,
        });
    }

    handleSignUp = () => {
        const { email, password, isPassed, isLegitEmail } = this.state;
        this.setState({
            isSubmited: true,
        });
        if (isPassed && isLegitEmail) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => this.props.navigation.navigate('App'))
                .catch(error => this.setState({ errorMessage: error.message }));
        }
    }

    render() {
        const { email, password, passwordConfirm, isPassed, isFocusedConfirm, isLegitEmail, errorMessage, isSubmited } = this.state;
        return (
            <KeyBoardAvoidingView style={styles.container}>
                <ScrollView style={{ flex: 1 }} >
                    <View style={styles.title}>
                        <SemiBoldText style={styles.titleText}>Create account</SemiBoldText>
                    </View>
                    {errorMessage && <RegularText style={styles.textNote}>{errorMessage}</RegularText>}

                    <View style={styles.fillField}>
                        <RegularText style={styles.titleFill}>Your email</RegularText>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={this.onChangeEmail}
                            value={email}
                            style={styles.inputText}
                            placeholderTextColor={"#fff"}
                        />
                    </View>
                    {!isLegitEmail && isSubmited && <RegularText style={styles.textNote}>Email not available</RegularText>}

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
                        <RegularText style={styles.titleFill}>Confirm your password</RegularText>
                        <TextInput
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={this.onChangePasswordConfirm}
                            value={passwordConfirm}
                            style={styles.inputText}
                            placeholderTextColor={"#fff"}
                            onFocus={this.onFocusedConfirm}
                        />
                        {
                            !isPassed && isFocusedConfirm ? <RegularText style={styles.textNote}>Password not match</RegularText> : null
                        }
                    </View>

                    <TouchableOpacity
                        style={styles.btnSignUp}
                        onPress={this.handleSignUp}
                    >
                        <MediumText style={styles.textSignUp}>Sign Up</MediumText>
                    </TouchableOpacity>
                </ScrollView>
            </KeyBoardAvoidingView>
        );
    }
}

export default Register;
