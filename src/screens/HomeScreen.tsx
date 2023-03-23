import React from 'react';
import {Text} from 'react-native';
import {Container} from '../components';

export const HomeScreen = () => {
  return (
    <Container justify="center" align="center">
      <Text className="text-xl text-black">Home Screen</Text>
      <Text className="text-center mt-4 text-black">
        Navigation has been reset so if you press back button eventually you
        will close the app
      </Text>
    </Container>
  );
};
