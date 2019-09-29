import React from 'react';
import { Text } from 'react-native';
import styles from './styles/index.css';

const SemiBoldText = ({ text, style, children, ...otherProps }) => {
    return (
        <Text {...otherProps} style={[styles.fontSemiBold, style]} >
            {text ? text : children}
        </Text>
    );
}

export default SemiBoldText;