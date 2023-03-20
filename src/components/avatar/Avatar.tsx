import React, { useMemo } from 'react';
import { FlexStyle, Image, Pressable } from 'react-native';
type IconButtonsProps = FlexStyle & {
  size?: 'small' | 'normal' | 'big';
  rounded?: boolean;
  onPress?: () => void;
  img: { uri: string };
};

/**
 * @param size small=28 | (default)normal=32 | big=40
 * @returns
 */
const Avatar: React.FC<IconButtonsProps> = ({
  img,
  size = 'normal',
  rounded,
  onPress,
  ...rest
}) => {
  const stylesAvatar = useMemo(() => {
    let height = 32;
    if (size === 'small') { height = 28; }
    if (size === 'big') { height = 40; }
    return { height, width: height, Rounded: rounded ? height / 2 : 3 };
  }, [size, rounded]);
  return (
    <Pressable onPress={onPress} {...rest}>
      <Image
        style={{
          resizeMode: 'stretch',
          width: stylesAvatar.width,
          height: stylesAvatar.height,
          borderRadius: stylesAvatar.Rounded,
        }}
        source={img} />
    </Pressable>
  );
};

export default Avatar;
