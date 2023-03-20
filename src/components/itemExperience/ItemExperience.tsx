import React from 'react';
import { FlexStyle, View } from 'react-native';
import { stylesItem } from './styles';
import { Avatar } from '..';
import { theme } from '../../theme';
import { Text, TextLink } from '../../components';
interface Data {
  DataExperience: {
    img?: any | string,
    labelNameEntity?: string,
  },
  dataInfo: {
    labelOccupation?: string,
    labelDataStart?: string,
    labelDataEnd?: string,
  },

}


type ItemExperienceProps = FlexStyle & {
  colorText?: string,
  optionalFunction?: boolean,
  data?: Data
}
const { colors } = theme;
const ItemExperience: React.FC<ItemExperienceProps> = ({ data, colorText = 'black', optionalFunction }) => {
  return (
    <View style={stylesItem.Container}>
      <View style={stylesItem.ContainerComponets}>
        <View style={{ flexDirection: 'row', flex: 2 }}>
          <View style={{ justifyContent: 'center' }}>
            <Avatar onPress={() => { console.log('e'); }} size="small" rounded img={{ uri: data?.DataExperience.img }} />
          </View>
          <View style={{ marginLeft: 8, paddingRight: 12 }}>
            <Text size="small" >{data?.dataInfo.labelOccupation}</Text>
            <Text size="xSmall" color="#999999" >{data?.DataExperience.labelNameEntity} </Text>
            <Text size="xSmall" color="#999999" >{data?.dataInfo.labelDataStart} - <Text style={{ fontSize: 10 }} color="#999999">{data?.dataInfo.labelDataEnd}</Text></Text>
          </View>
        </View>
        {optionalFunction && <TextLink underlineHide size="xxSmall" fontWeight="semibold" color={colors.primary} textAlign="right"  >Eliminar</TextLink>}
      </View>

    </View>
  );
};

export default ItemExperience;
