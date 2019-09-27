import React from 'react';
import { View, Text } from 'react-native';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Register</Text>
            </View>
        );
    }
}

export default Register;
