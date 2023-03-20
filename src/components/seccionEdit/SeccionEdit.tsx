import React from 'react';
import { View } from 'react-native';
import { Text, TextLink } from '../../components';
import { theme } from '../../theme';


const { colors } = theme;

type SeccionEditprops = {
  title?: string,
  children?: JSX.Element | any,
  functionTextLabel?: string | any,
  onPress?: () => void

};
const SeccionEdit: React.FC<SeccionEditprops> = ({ title, children, onPress, functionTextLabel }) => {
  return (
    <View style={{ marginTop: 20, marginHorizontal: 15, marginVertical: 10 }} >
      <View style={{ flexDirection: 'row', justifyContent: functionTextLabel && title ? 'space-between' : (title ? 'flex-start' : 'flex-end') }}>
        {title ? <Text marginBottom={10} fontWeight="semibold" color="black">{title}</Text> : undefined}
        {functionTextLabel ? <TextLink size="xSmall" textAlign="right" fontWeight="semibold" onPress={onPress} color={colors.primary} underlineHide={true} >{functionTextLabel}</TextLink> : undefined}
      </View>
      <View >
        {children}
      </View>
    </View>

  );
};

export default SeccionEdit;
