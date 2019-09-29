import React from 'react';
import { Text } from 'react-native';
import styles from './styles/index.css';

const RegularText = ({ text, style, children, ...otherProps }) => {
    return (
        <Text {...otherProps} style={[styles.fontRegular, style]}>
            {text ? text : children}
        </Text>
    );
}

export default RegularText;