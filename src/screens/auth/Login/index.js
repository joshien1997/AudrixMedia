import React from 'react';
import { View, Text } from 'react-native';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login</Text>
            </View>
        );
    }
}

export default Login;
