import React from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from './styles/index.css';
import MediumText from '../../base/components/Text/MontserratText/MediumText';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onNavigateSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../public/Spotify_Logo_CMYK_White.png')}
                    style={{ width: screenWidth * 0.6, height: screenWidth * 0.18, marginBottom: 25 }}
                    resizeMode={'cover'}
                />

                <View style={styles.intro}>
                    <MediumText style={styles.textIntro}>Millions of songs.</MediumText>
                    <MediumText style={styles.textIntro}>Free on Spotify.</MediumText>
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.btnSignUp}
                        onPress={this.onNavigateSignUp}
                    >
                        <MediumText style={styles.textBtn}>SIGN UP FREE</MediumText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnFB}
                    >
                        <MediumText style={styles.textBtn}>CONTINUE WITH FACEBOOK</MediumText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.onNavigateLogin}
                    >
                        <MediumText style={[styles.textBtn], { color: '#000' }}>LOG IN</MediumText>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Register;
