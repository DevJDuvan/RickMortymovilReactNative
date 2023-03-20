import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Pressable} from 'react-native';
import {Icon} from '../icon';
import {Text} from '../text';
import {stylesRibbon} from './styles';
import {paddingApp} from '../../theme/index';

type ButtonBackDefaultProps = {
  backDefaultColor?: string;
};

const ButtonBackDefault: React.FC<ButtonBackDefaultProps> = ({
  backDefaultColor,
}) => {
  const navigation = useNavigation();
  // const { name } = useRoute();
  return (
    <Pressable
      style={stylesRibbon.buttonDefault}
      onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={25} color={backDefaultColor} />
      {/* <Text color="white" size="big" >{name}</Text> */}
    </Pressable>
  );
};

type RibbonProps = ButtonBackDefaultProps & {
  title?: string;
  titleColor?: string;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  children?: JSX.Element | string | any;
  backDefault?: boolean;
  backgroundColor?: string;
};
const Ribbon: React.FC<RibbonProps> = ({
  leftComponent,
  title,
  titleColor,
  backgroundColor,
  backDefault = true,
  backDefaultColor = 'white',
  children,
  rightComponent,
}) => {
  return (
    <View style={[stylesRibbon.container, {backgroundColor}]}>
      <View style={[stylesRibbon.buttons, {left: 0}]}>
        {leftComponent ? (
          leftComponent
        ) : backDefault ? (
          <ButtonBackDefault {...{backDefaultColor}} />
        ) : null}
      </View>
      {rightComponent ? (
        <View style={[stylesRibbon.buttons, {right: 0}]}>{rightComponent}</View>
      ) : null}
      <View style={stylesRibbon.content}>
        {title ? (
          <Text
            textTransform="uppercase"
            fontWeight="semibold"
            color={titleColor}
            style={{paddingHorizontal: paddingApp * 2}}>
            {title}
          </Text>
        ) : null}
        {children ?? null}
      </View>
    </View>
  );
};

export default Ribbon;
