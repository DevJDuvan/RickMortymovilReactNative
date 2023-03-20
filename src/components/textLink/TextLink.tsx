import React from 'react';
import { theme } from '../../theme';
import { Text, TextProps } from '../text';

type TextLinkProps = TextProps & {
  children: JSX.Element |JSX.Element[]|React.ReactNode |string
  underlineHide?: boolean,
  onPress?: () => void
}

const { colors } = theme;
/**
 *
 * @param size: xSmall=12 (default) | small=14 | normal=16 | big=18
 * @returns Element type Text
 */
const TextLink: React.FC<TextLinkProps> = (({ color = colors.link, textAlign, underlineHide, style, size = 'xSmall', children, onPress, ...rest }) => {
  return (
    <Text onPress={onPress} {...{ size, color }} {...rest} style={[{ textAlign, textDecorationLine: !underlineHide ? 'underline' : 'none' }, style]}>
      {children}
    </Text>
  );
});
export default TextLink





