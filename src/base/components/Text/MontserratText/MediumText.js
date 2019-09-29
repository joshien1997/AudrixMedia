import React from 'react';
import { Text } from 'react-native';
import styles from './styles/index.css';

const MediumText = ({ text, style, children, ...otherProps }) => {
    return (
        <Text {...otherProps} style={[styles.fontMedium, style]} >
            {text ? text : children}
        </Text>
    );
}

export default MediumText;