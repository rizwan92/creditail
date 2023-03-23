// @ts-ignore
import styled from 'styled-components/native';
import {styled as NativeWindStyle} from 'nativewind';

import {TouchableOpacity} from 'react-native';

export const Button = styled(NativeWindStyle(TouchableOpacity))`
  width: ${(props: {rounded: any}) => (props.rounded ? '100%' : 'auto')};
  height: 48px;
  border-radius: ${(props: {rounded: any}) => (props.rounded ? '50%' : '4px')};
  background-color: ${(props: {disabled: any}) =>
    props.disabled ? '#EFEFEF' : '#2760b6'}; })};
  justify-content: center;
  align-items: center;
`;
