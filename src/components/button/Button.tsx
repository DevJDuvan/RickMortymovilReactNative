import React, { useMemo } from 'react';
import { FlexStyle, PressableProps , Pressable, Text } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

type ButtonProps = Omit<PressableProps, 'style'> &
  FlexStyle & {
    children: string | JSX.Element;
    type?: 'primary' | 'secondary' | 'danger' | 'gray';
    size?: 'small' | 'normal' | 'medium' | 'big';
    height?: number
    outline?: boolean;
  };

  /**
   * @param size small=18 | medium=29 | (default)normal=45 | big=53
   * @param height number, this props disabled size
   * @returns
   */
const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  outline,
  height:heightProp,
  size = 'normal',
  ...propsPressable
}) => {
  const { colors } = theme;

  const height = useMemo(() => {
    if (size === 'big') { return 53; }
    if (size === 'medium') { return 29; }
    if (size === 'small') { return 18; }
    return 45;
  }, [size]);

  const stylesButton = useMemo(() => {
    if (outline) {
      return {
        color: colors[type],
      };
    }
    if (type === 'primary') {
      return {
        bg: colors.primary,
        color: 'white',
      };
    }
    if (type === 'secondary') {
      return {
        bg: colors.secondary,
        color: colors.primary,
      };
    }
    if (type === 'danger') {
      return {
        bg: colors.danger,
        color: 'white',
      };
    }
    if (type === 'gray') {
      return {
        bg:colors.btnGray,
        color: colors.darkText,
      };
    }
    return { bg: colors[type] };
  }, [colors, type, outline]);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { borderRadius: size === 'small' ? 3 : 4 },
        pressed && styles.containerPressed,
        {
          backgroundColor: outline ? undefined : stylesButton.bg,
          height: heightProp ?? height,
          borderColor: colors[type],
          borderWidth: 1,
        },
      ]}
      {...propsPressable}>
      <Text
        style={[
          styles.text,
          {
            color: stylesButton.color,
            fontSize: size === 'big' ? 18 : size === 'small' ? 10 : 16,
          },
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
