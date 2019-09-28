import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainAppScreen from './screens/main/MainApp';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import CheckAuthScreen from './CheckAuth';
import MainAuthScreen from './screens/auth/MainAuth';

const AppStack = createStackNavigator(
    {
        MainApp: MainAppScreen,
    },
    {
        headerMode: 'none',
    }
);

const AuthStack = createStackNavigator(
    {
        MainAuth: MainAuthScreen,
        Register: RegisterScreen,
        Login: LoginScreen,
    },
    {
        headerMode: 'none',
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
