import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainAppScreen from './screens/main/MainApp';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import CheckAuthScreen from './CheckAuth';

const AppStack = createStackNavigator(
    {
        MainApp: MainAppScreen,  
    }
);

const AuthStack = createStackNavigator(
    {
        Register: RegisterScreen,
        Login: LoginScreen,
    }
);

const AppSwitch = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
        CheckAuth: CheckAuthScreen,
    },
    {
        initialRouteName: 'CheckAuth',
    }
);

const MainTabNavigation = createAppContainer(AppSwitch);

export default MainTabNavigation;
