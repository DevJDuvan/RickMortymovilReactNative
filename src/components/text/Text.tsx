import React, { useMemo } from 'react';
import { Text as TextRN, TextProps as TextPropsRN } from 'react-native';
import { StyleProps } from 'react-native-reanimated';
import { theme } from '../../theme';

const { fontFamily: fontFamilyTh, colors, fontSize: fz } = theme;

type SpacingText = {
  marginTop?: number
  marginBottom?: number
  marginVertical?: number
}

export type TextProps = SpacingText & TextPropsRN & {
  children: string | React.ReactNode;
  size?: 'xxSmall' | 'xSmall' | 'small' | 'normal' | 'big';
  style?: StyleProps;
  color?: string;
  opacity?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  fontWeight?: 'normal' | 'semibold' | 'bold';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
};

/**
 *
 * @param size: xxSmall=10 | xSmall=12 | small=14 | normal=16 (default) | big=18
 * @returns Element type Text
 */
const Text: React.FC<TextProps> = ({
  children,
  style,
  color = colors.text,
  opacity = 1,
  size = 'normal',
  textTransform = 'none',
  fontWeight = 'normal',
  textAlign,
  ...rest
}) => {
  const { marginTop, marginBottom, marginVertical, ...restText } = rest;
  const fontSize: number = useMemo(() => {
    if (size === 'xxSmall') { return fz.xxs; }
    if (size === 'xSmall') { return fz.xs; }
    if (size === 'small') { return fz.sm; }
    if (size === 'big') { return fz.lg; }
    return fz.base;
  }, [size]);

  const fontFamily = useMemo(() => {
    if (fontWeight === 'semibold') { return fontFamilyTh.semiBold; }
    if (fontWeight === 'bold') { return fontFamilyTh.title; }
    return fontFamilyTh.text;
  }, [fontWeight]);

  return (
    <TextRN {...restText}
      style={[{
        fontSize,
        color,
        opacity,
        textTransform,
        fontFamily,
        textAlign,
        marginTop,
        marginBottom,
        marginVertical,
      }, style]}>
      {children}
    </TextRN>
  );
};

export default Text;
