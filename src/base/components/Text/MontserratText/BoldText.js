import React from 'react';
import { Text } from 'react-native';
import styles from './styles/index.css';

const BoldText = ({ text, style, children, ...otherProps }) => {
    return (
        <Text {...otherProps} style={[styles.fontBold, style]} >
            {text ? text : children}
        </Text>
    );
}

export default BoldText;