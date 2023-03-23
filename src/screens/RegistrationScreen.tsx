import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import React, {useRef} from 'react';
import {
  Container,
  Text,
  Logo,
  Input,
  Form,
  Button,
  OTPVerification,
} from '../components';
import LoaderIcon from '../components/LoaderIcons';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../utils/constants';

const otp_number = Math.floor(1000 + Math.random() * 9000);

export const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [aadhar, setAadhar] = React.useState('');
  const [pan, setPan] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const actionSheetRef = useRef<ActionSheetRef>(null);
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const aadharRef = React.useRef();
  const panRef = React.useRef();

  React.useEffect(() => {
    if (name && email && aadhar && pan) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, aadhar, pan]);

  const navigateToOTP = () => {
    actionSheetRef.current?.show();
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigateToOTP();
    }, 1000);
  };

  return (
    <Container>
      <Form>
        <Logo />
        <Text.H3 weight="Bold" className="mt-8">
          Step 1
        </Text.H3>
        <Text className="mt-4" size={16}>
          Please enter your details
        </Text>
        <Input
          label=" Shop Owner Name"
          placeholder="Enter Store Owner Name"
          placeholderTextColor="#B1B1B1"
          min={3}
          max={20}
          value={name}
          onChangeText={setName}
          ref={nameRef}
          nextRef={emailRef}
        />

        <Input
          label=" Email Address"
          placeholder="abcdefgh@gmail.com"
          placeholderTextColor="#B1B1B1"
          keyboardType="email"
          regex={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
          value={email}
          onChangeText={setEmail}
          ref={emailRef}
          nextRef={aadharRef}
        />

        <Input
          label=" Aadhar Number"
          placeholder="123456780123"
          placeholderTextColor="#B1B1B1"
          keyboardType="numeric"
          value={aadhar}
          regex={new RegExp(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/)}
          onChangeText={setAadhar}
          ref={aadharRef}
          nextRef={panRef}
        />

        <Input
          label=" PAN Number"
          placeholder="ABCDE1234F"
          placeholderTextColor="#B1B1B1"
          value={pan}
          regex={new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)}
          onChangeText={setPan}
          ref={panRef}
        />
        <Button
          className="mt-8 rounded-xl"
          onPress={onSubmit}
          disabled={disabled}>
          {loading ? (
            <LoaderIcon />
          ) : (
            <Text color={disabled ? 'Black' : 'white'} weight="Bold">
              Continue
            </Text>
          )}
        </Button>
        <ActionSheet ref={actionSheetRef}>
          <View className="h-72 bg-[#2760B6] pl-6 pt-6 pr-6">
            <Text size={20} weight="Bold" color="white" className="mt-4">
              Enter OTP <Text color="white">({otp_number.toString()})</Text>
            </Text>
            <View className="mt-4">
              <OTPVerification
                otp={otp_number.toString()}
                onSuccess={() => {
                  actionSheetRef.current?.hide();
                  // @ts-ignore
                  navigation.navigate(SCREENS.SUCCESS_ONBOARD);
                }}
              />
            </View>
            <Text size={12} weight="Regular" color="white" className="mt-4">
              Din't receive the code yet ?
            </Text>
            <TouchableOpacity>
              <Text
                size={16}
                weight="Bold"
                color="white"
                className="mt-2 leading-4">
                RESEND
              </Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
      </Form>
    </Container>
  );
};
