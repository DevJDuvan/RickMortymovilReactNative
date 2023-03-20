import React from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleProp, ViewStyle } from 'react-native';

type AnimateProps = Animatable.AnimatableProperties<ViewStyle> & {
  children: any
  style?: StyleProp<ViewStyle>
}

const Animate: React.FC<AnimateProps> = ({ children, style, ...restAnimation }) => {
  return (
    <Animatable.View {...restAnimation} style={[style]}>
      {children}
    </Animatable.View>
  );
};

export default Animate;
