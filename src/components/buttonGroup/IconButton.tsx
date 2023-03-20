import React from 'react';
import {Image, Text, Pressable, PressableProps} from 'react-native';
import {stylesButton} from './styles';
type IconButtonsProps = PressableProps & {
  img: string;
  label?: any;
};
const IconButton: React.FC<IconButtonsProps> = ({img, label, ...rest}) => {
  return (
    <Pressable {...rest} style={[stylesButton.BotonIcon]}>
      <Image source={img}></Image>
      <Text style={[stylesButton.labelbutton]}>{label}</Text>
    </Pressable>
  );
};
export default IconButton;
