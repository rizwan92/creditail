import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import OnBoardSccessIcon from '../components/OnBoardSuccessIcon';
import {SCREENS} from '../utils/constants';

export const OnBoaringSuccessScreen = () => {
  const navigation = useNavigation();

  // reset navigation after 2000 most
  React.useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: SCREENS.HOMES}],
      });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="bg-[#188748] flex-1 justify-center items-center">
      <StatusBar backgroundColor="#000" />
      <OnBoardSccessIcon />
      <Text className="mt-4 text-white font-normal text-xl">
        Onboarding Successfull
      </Text>
    </View>
  );
};
