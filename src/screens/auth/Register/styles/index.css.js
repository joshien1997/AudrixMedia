import { StyleSheet } from 'react-native';
import { colorsApp } from '../../../../configs/colorsApp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorsApp.black,
    },

    inputText: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderColor: '#ccc',
        borderWidth: 0.5,
        marginTop: 12,
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
        marginTop: 10,
        width: '80%',
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
