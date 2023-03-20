import React from 'react';
import { FlexStyle, View , StyleProp, ViewStyle} from 'react-native';
import IconNV from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../theme';

type IconProps = FlexStyle  & {
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>
};

const { colors } = theme;
/**
 * @param size (default)16
 * @returns
 */
const Icon: React.FC<IconProps> = ({ name, size = 16, color = colors.text, style, ...rest }) => {
  return (
    <View {...rest} style={[style]}  >
      <IconNV {...{ name, size, color }} />
    </View>
  );
};

export default Icon;
