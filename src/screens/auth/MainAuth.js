import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from './styles/index.css';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onNavigateSignUp = () => {
        const {navigation} = this.props;
        navigation.navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../public/Spotify_Logo_CMYK_Green.png')}
                    style={{ width: screenWidth * 0.6, height: screenWidth * 0.18, marginBottom: 25 }}
                    resizeMode={'cover'}
                />

                <View style={styles.intro}>
                    <Text style={styles.textIntro}>Millions of songs.</Text>
                    <Text style={styles.textIntro}>Free on Spotify.</Text>
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.btnSignUp}
                        onPress={this.onNavigateSignUp}
                    >
                        <Text style={styles.textBtn}>SIGN UP FREE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnFB}
                    >
                        <Text style={styles.textBtn}>CONTINUE WITH FACEBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.onNavigateLogin}
                    >
                        <Text style={[styles.textBtn], { color: '#000' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Register;
