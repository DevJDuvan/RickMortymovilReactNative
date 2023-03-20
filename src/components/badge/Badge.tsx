import React, {useMemo} from 'react';
import {FlexStyle, View} from 'react-native';
import {theme} from '../../theme';
import { Text } from '../text';
type IconButtonsProps = FlexStyle & {
  size?: 'small' | 'normal' | 'big';
  label?: string;
  color?: string | any;
};
const { colors } = theme;
/**
 *
 * @param size small=12 | (default)normal=16 | big=20
 * @returns
 */
const Badge: React.FC<IconButtonsProps> = ({
  color: backgroundColor = colors.badge,
  size = 'small',
  label,
  ...rest
}) => {

  const stylesBadge = useMemo(() => {
    if (size === 'small') {return {height: 12, width: 12, fontSize: 10};}
    if (size === 'normal') {return { height: 16, width: 16, fontSize: 12 };}
    return { height: 20, width: 20, fontSize: 16 };
  }, [size]);

  return (
    <View
      style={{
        width: stylesBadge.width,
        height: stylesBadge.height,
        borderRadius: 1,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}>
      <Text fontWeight="bold"
        style={{
          fontSize: stylesBadge.fontSize,
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {label}
      </Text>
    </View>
  );
};
export default Badge;
