import { StyleSheet } from 'react-native';
import { colorsApp } from '../../../configs/colorsApp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colorsApp.black,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    intro: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textIntro: {
        color: '#fff',
        fontSize: 25,
    },

    btns: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnSignUp: {
        marginTop: 10,
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: colorsApp.green,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnFB: {
        marginTop: 10,
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnLogin: {
        marginTop: 10,
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBtn: {
        color: '#fff',
        fontSize: 13,
    }
});

export default styles;
