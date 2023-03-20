import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../theme';

type SpacingText = {
  marginTop?:number
  marginBottom?:number
  marginVertical?:number
}

type TitleProps = SpacingText & {
  color?: string;
  size?: 'small' | 'normal' | 'big';
  children: JSX.Element | string;
  position?: 'left' | 'center' | 'right' | 'auto' | 'justify';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none'
  semiBold?: boolean
  bold?:boolean
};

const { fontFamily } = theme;

/**
 *
 * @param size: small= 18 | (default)normal=26 | big=30
 * @returns
 */
const Title: React.FC<TitleProps> = ({
  color = 'black',
  size = 'normal',
  position = 'auto',
  textTransform = 'none',
  children,
  bold,
  semiBold,
  ...rest
}) => {

  const { marginTop, marginBottom, marginVertical, ...restText} = rest;

  const fontSize = useMemo(() => {
    if (size === 'small') { return 18; }
    if (size === 'big') { return 30; }
    return 26;
  }, [size]);

  return (
    <View style={{ marginVertical: 15 }} {...restText}>
      <Text
        style={{
          fontFamily: bold ? fontFamily.title : semiBold ? fontFamily.semiBold : fontFamily.text,
          textAlign: position,
          color: color,
          textTransform,
          fontSize,
          marginTop,
          marginBottom,
          marginVertical,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;
