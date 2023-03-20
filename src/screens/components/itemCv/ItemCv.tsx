import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text, TextLink } from '../../../components';

type ItemCvProp = {
  item: {
        name: string,
        date: string,
        active: boolean
        }
}
const ItemCv: React.FC<ItemCvProp> = ({ item }) => {
  const { name, date, active } = item;
  return (
    <View style={styles.inLine}>
      <Text>{name}</Text>
      <View style={styles.inLine}>
        <Icon size={14} name="cloud-download-outline" marginRight={5} />
        <Text size="xSmall">{date}</Text>
      </View>
      {active ? (
        <TextLink>enviar</TextLink>
        ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ItemCv;
