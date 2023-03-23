import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import LoaderIcon from './LoaderIcons';
import SendArrowIcon from './SendArrowIcon';

const OTPCOnatiner = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OTPBox = styled(TextInput)`
  width: 48px;
  height: 48px;
  background-color: rgba(239, 239, 239, 0.5);
  font-size: 20px;
  font-family: Poppins-Bold;
  padding-left: 16px;
  padding-bottom: 0px;
`;

const RoundedButton = styled(TouchableOpacity)`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding-left: ${(props: {loading: any}) => (props.loading ? 0 : 6)}px;
`;

interface OTPVerificationProps {
  otp: string;
  onSuccess: () => void;
}

const OTPVerification = (props: OTPVerificationProps) => {
  const [one, setOne] = React.useState('');
  const [two, setTwo] = React.useState('');
  const [three, setThree] = React.useState('');
  const [four, setFour] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const refOne = React.useRef();
  const refTwo = React.useRef();
  const refThree = React.useRef();
  const refFour = React.useRef();

  const onSubmitEditing = (_ref: React.MutableRefObject<undefined>) => {
    // @ts-ignore
    _ref?.current?.focus();
  };

  const onKeyPress = (e: any, _ref: any) => {
    if (e.nativeEvent.key === 'Backspace') {
      // @ts-ignore
      _ref?.current?.focus();
    }
  };

  const verify = () => {
    setLoading(true);

    const actualOTP = props.otp;

    setTimeout(() => {
      setLoading(false);
      if (one + two + three + four === actualOTP) {
        // @ts-ignore
        refOne.current?.setNativeProps({style: {backgroundColor: 'inherit'}});
        // @ts-ignore
        refTwo.current?.setNativeProps({style: {backgroundColor: 'inherit'}});
        // @ts-ignore
        refThree.current?.setNativeProps({style: {backgroundColor: 'inherit'}});
        // @ts-ignore
        refFour.current?.setNativeProps({style: {backgroundColor: 'inherit'}});
        props.onSuccess();
      } else {
        // @ts-ignore
        refOne.current?.setNativeProps({style: {backgroundColor: '#ffb09c'}});
        // @ts-ignore
        refTwo.current?.setNativeProps({style: {backgroundColor: '#ffb09c'}});
        // @ts-ignore
        refThree.current?.setNativeProps({style: {backgroundColor: '#ffb09c'}});
        // @ts-ignore
        refFour.current?.setNativeProps({style: {backgroundColor: '#ffb09c'}});
      }
    }, 1000);
  };

  React.useEffect(() => {
    if (one.length === 1) {
      onSubmitEditing(refTwo);
    }
  }, [one]);

  React.useEffect(() => {
    if (two.length === 1) {
      onSubmitEditing(refThree);
    }
  }, [two]);

  React.useEffect(() => {
    if (three.length === 1) {
      onSubmitEditing(refFour);
    }
  }, [three]);

  return (
    <OTPCOnatiner>
      <OTPBox
        keyboardType="numeric"
        maxLength={1}
        ref={refOne}
        onSubmitEditing={() => onSubmitEditing(refTwo)}
        value={one}
        onChangeText={setOne}
      />
      <OTPBox
        keyboardType="numeric"
        ref={refTwo}
        onSubmitEditing={() => onSubmitEditing(refThree)}
        value={two}
        onChangeText={setTwo}
        onKeyPress={(e: any) => onKeyPress(e, refOne)}
      />
      <OTPBox
        keyboardType="numeric"
        ref={refThree}
        onSubmitEditing={() => onSubmitEditing(refFour)}
        value={three}
        onChangeText={setThree}
        onKeyPress={(e: any) => onKeyPress(e, refTwo)}
      />
      <OTPBox
        keyboardType="numeric"
        ref={refFour}
        value={four}
        onChangeText={setFour}
        onKeyPress={(e: any) => onKeyPress(e, refThree)}
        onSubmitEditing={verify}
      />
      <RoundedButton onPress={verify} loading={loading}>
        {loading ? <LoaderIcon /> : <SendArrowIcon />}
      </RoundedButton>
    </OTPCOnatiner>
  );
};

export default OTPVerification;
