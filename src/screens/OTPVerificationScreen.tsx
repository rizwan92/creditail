import React from 'react';
import {Container, Text} from '../components';

export const OPTVerificationScreen = () => {
  return (
    <Container>
      <Text.H3 weight="Bold" className="mt-8">
        Step 2
      </Text.H3>
      <Text className="mt-4" size={16}>
        Please enter your details
      </Text>
    </Container>
  );
};
