import React, {forwardRef, memo} from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import RightIcon from './RightIcon';
import {Text} from './Text';
import {styled as NativeWindStyle} from 'nativewind';
import {TextInput, View} from 'react-native';

const InputStyled = styled(NativeWindStyle(TextInput))`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #919191;
  padding: 0 16px;
  font-size: 16px;
  font-family: Poppins-Regular;
  color: #000000;
  position: relative;
`;
interface InputProps {
  value: string;
  onChangeText: (value: string) => void;
  min?: number | undefined;
  max?: number | undefined;
  regex?: RegExp;
  placeholder?: string;
  secureTextEntry?: boolean;
  rounded?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: string;
  placeholderTextColor?: string;
  label?: string;
  onSubmitEditing?: () => void;
  nextRef?: any;
}

const defaultProps = {
  value: '',
  onChangeText: () => {},
  onSubmitEditing: () => {},
};

const Input = forwardRef((props: InputProps, ref: any) => {
  const {isError, error} = validation({
    min: props.min,
    max: props.max,
    regex: props.regex,
    value: props.value,
  });

  return (
    <View className="relative w-full">
      {props.label && (
        <Text.Label size={11} className="mt-4">
          {props.label}
        </Text.Label>
      )}
      <InputStyled
        {...props}
        ref={ref}
        onSubmitEditing={() => {
          if (props.nextRef) {
            props.nextRef.current.focus();
          }
        }}
      />
      {isError ? (
        <Text size={11} className="mt-1" color="red">
          {error}
        </Text>
      ) : (
        <>{props.value.length > 1 ? <RightIcon /> : null}</>
      )}
    </View>
  );
});

Input.defaultProps = defaultProps;
Input.displayName = 'Input';

export default memo(Input);

type ValidationReturn = {
  isError: boolean;
  error: string | null;
};

type ValidationInput = {
  value: string;
  min?: number | undefined;
  max?: number | undefined;
  regex?: RegExp;
};

const validation = (input: ValidationInput): ValidationReturn => {
  const {value, min, max, regex} = input;
  if (value === '') {
    return {isError: false, error: null};
  }

  if (min && value.length <= min) {
    return {isError: true, error: `Must be at least ${min} characters`};
  }
  if (max && value.length >= max) {
    return {isError: true, error: `Must be at most ${max} characters`};
  }
  if (regex && !regex.test(value)) {
    return {isError: true, error: `Must match ${regex}`};
  }
  return {isError: false, error: null};
};
