import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {IconButton, Icon} from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';

const COLORS = {
  mustard: '#fbad34',
  dark_box: '#161617',
};

export default function IconArrowReverse(props) {
  const navigation = useNavigation();

  return (
    <>
      <Text>ATRAS</Text>
      {/* <IconButton
        onPress={() => navigation.goBack()}
        icon={<Icon as={<Feather name="arrow-left" />} />}
        bg={props.bg || COLORS.dark_box}
        mr={2}
        borderRadius="10"
        _icon={{color: props.color || COLORS.mustard, size: 'sm'}}
        _pressed={{
          bg: props.color || COLORS.mustard,
          _icon: {color: COLORS.dark_box},
        }}
      /> */}
    </>
  );
}
