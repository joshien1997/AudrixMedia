import React from 'react';
import firebase from 'react-native-firebase';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
    Image,
    Dimensions,
} from 'react-native';
import { colorsApp } from './configs/colorsApp';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    // _bootstrapAsync = async () => {
    //     const userToken = await AsyncStorage.getItem('userToken');

    //     // This will switch to the App screen or Auth screen and this loading
    //     // screen will be unmounted and thrown away.
    //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // };

    _bootstrapAsync = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.time = setTimeout(() => {
                this.props.navigation.navigate(user ? 'App' : 'Auth');
            }, 2000);
        });
    }

    componentWillUnmount() {
        clearTimeout(this.time);
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorsApp.black }}>
                {/* <ActivityIndicator size={50} color="blue"/> */}
                {/* <StatusBar barStyle="default" /> */}
                <Image
                    source={require('./public/Spotify_Logo_CMYK_Green.png')}
                    style={{ width: screenWidth * 0.6, height: screenWidth * 0.18, marginBottom: 25 }}
                    resizeMode={'cover'}
                />
            </View>
        );
    }
}

export default AuthLoadingScreen;