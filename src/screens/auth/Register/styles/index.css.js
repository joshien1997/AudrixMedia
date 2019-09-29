import { StyleSheet } from 'react-native';
import { colorsApp } from '../../../../configs/colorsApp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsApp.black,
        padding: 20,
    },

    title: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },

    titleText: {
        color: '#fff',
        fontSize: 25,
    },

    fillField: {
        width: '100%',
        marginTop: 12,
    },

    titleFill: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 10,
    },

    inputText: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 0.5,
        paddingVertical: 0,
        paddingHorizontal: 15,
        fontSize: 15,
        color: '#fff',
    },

    textNote: {
        color: 'red',
        marginTop: 8,
    },

    btnSignUp: {
        marginTop: 25,
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: colorsApp.green,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textSignUp: {
        color: '#fff',
        fontSize: 15,
    }
});

export default styles;
