import React from 'react';
import { Animated, Keyboard } from 'react-native';

class KeyBoardAvoidingView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.keyboardHeight = new Animated.Value(0);
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillHideSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.keyboardHeight, {
            toValue: event.endCoordinates.height,
            duration: event.duration,
        }).start();
    }

    keyboardWillHide = () => {
        Animated.timing(this.keyboardHeight, {
            toValue: 0,
            duration: event.duration,
        }).start();
    }

    render() {
        const { children, style } = this.props;
        return (
            <Animated.View style={[style, { paddingBottom: this.keyboardHeight }]} >
                {children}
            </Animated.View>
        );
    }
}

export default KeyBoardAvoidingView;
