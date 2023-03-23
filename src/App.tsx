/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './utils/constants';
import {
  HomeScreen,
  OnBoaringSuccessScreen,
  OPTVerificationScreen,
  RegistrationScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.REGISTER}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREENS.HOMES} component={HomeScreen} />
        <Stack.Screen name={SCREENS.REGISTER} component={RegistrationScreen} />
        <Stack.Screen
          name={SCREENS.OTP_VERIFICATION}
          component={OPTVerificationScreen}
        />
        <Stack.Screen
          name={SCREENS.SUCCESS_ONBOARD}
          component={OnBoaringSuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
