import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | undefined;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
} & typeof defaultProps;

const defaultProps = {
  justify: 'flex-start',
  align: 'flex-start',
  pt: 24,
  pl: 24,
  pr: 24,
  pb: 24,
};

export const Container = (props: ContainerProps) => {
  const {children} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
  };

  const wrapperStyle = {
    flex: 1,
    justifyContent: props.justify,
    alignItems: props.align,
    paddingTop: props.pt,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingBottom: props.pb,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#dfdfdf' : '#efefef'}
      />
      <View style={wrapperStyle}>{children}</View>
    </SafeAreaView>
  );
};

Container.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
