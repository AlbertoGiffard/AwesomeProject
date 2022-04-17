import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreen';
import PrincipalScreen from '@screens/PrincipalScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
/* const Stack = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false
        }
    }
}) */

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                navigationOptions={{ headerShown: false }}
                screenOptions={{ headerShown: false }}
                options={{ headerShown: false }}
            >
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    navigationOptions={{ headerShown: false }}
                    screenOptions={{ headerShown: false }}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false }}
                    navigationOptions={{ headerShown: false }}
                    screenOptions={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Principal'
                    component={PrincipalScreen}
                    navigationOptions={{ headerShown: false }}
                    screenOptions={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



/* export default createAppContainer(AppNavigation); */
export default AppNavigation;