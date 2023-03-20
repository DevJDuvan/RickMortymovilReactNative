import React from 'react';
import { FlexStyle, StyleProp, View, ViewStyle } from 'react-native';
import {paddingApp} from '../../theme';

type BoxProps = FlexStyle &
   {
    children?: React.ReactNode;
    bg?: string;
    style?: StyleProp<ViewStyle>;
  };
/**
 *
 * @param bg : background
 * @returns
 */
const Box: React.FC<BoxProps> = ({
  children,
  bg = 'transparent',
  style,
  ...boxProps
}) => {
  return (
    <View
      style={[{padding: paddingApp, backgroundColor: bg}, style]}
      {...boxProps}>
      {children}
    </View>
  );
};

export default Box;
