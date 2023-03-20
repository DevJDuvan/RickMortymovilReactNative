import React, {useMemo} from 'react';
import {Box} from '../box';
import {stylesCardBottom, stylesCardTop} from './styles';
import { StyleProp, ViewStyle } from 'react-native';

type CardProps = {
  children: JSX.Element | JSX.Element[];
  sticky?: 'top' | 'bottom';
  bg?: 'string'
  style?:StyleProp<ViewStyle>
};
const Card: React.FC<CardProps> = ({sticky,style, bg = 'white', children}) => {
  const borders = useMemo(() => {
    if (sticky === 'bottom') {return stylesCardTop;}
    if (sticky === 'top') {return stylesCardBottom;}
    return {...stylesCardBottom, ...stylesCardTop};
  }, [sticky]);

  return (
    <Box style={[borders, style]} flex={1} bg={bg}>
      {children}
    </Box>
  );
};

export default Card;
