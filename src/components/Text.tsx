import {Text as RNText} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import {styled as NativeWindStyle} from 'nativewind';

type TextProps = {
  weight?:
    | 'ExtraBold'
    | 'Bold'
    | 'SemiBold'
    | 'Medium'
    | 'Regular'
    | 'Light'
    | 'Thin'
    | 'ExtraLight';
  size?: number;
  color?: string;
};

export const Text = styled(NativeWindStyle(RNText))<TextProps>`
  color: ${(props: {color: any}) => props.color || '#000000'};
  font-size: ${(props: {size: any}) => props.size || 12}px;
  font-family: Poppins-${(props: {weight: any}) => props.weight || 'Regular'};
  line-height: 24px;
`;
export const Title = styled(Text)<TextProps>`
  font-size: ${(props: {size: any}) => props.size || 12}px;
  font-family: Poppins-${(props: {weight: any}) => props.weight || 'Regular'};
  line-height: 24px;
`;

const H1 = styled(Text)`
  font-size: ${(props: {size: any}) => props.size || 32}px;
  font-family: Poppins-${(props: {weight: any}) => props.weight || 'Bold'};
`;

const H2 = styled(H1)`
  font-size: ${(props: {size: any}) => props.size || 24}px;
`;

const H3 = styled(H1)<TextProps>`
  font-size: ${(props: {size: any}) => props.size || 20}px;
`;

const H4 = styled(H1)`
  font-size: ${(props: {size: any}) => props.size || 16}px;
`;

const H5 = styled(H1)`
  font-size: ${(props: {size: any}) => props.size || 14}px;
`;

const H6 = styled(H1)`
  font-size: ${(props: {size: any}) => props.size || 12}px;
`;

const Label = styled(Text)`
  font-size: ${(props: {size: any}) => props.size || 12}px;
  font-family: Poppins-${(props: {weight: any}) => props.weight || 'Regular'};
  color: gray;
`;

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
Text.H4 = H4;
Text.H5 = H5;
Text.H6 = H6;
Text.Label = Label;
Text.Title = Title;
