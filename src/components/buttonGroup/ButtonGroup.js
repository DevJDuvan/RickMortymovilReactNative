import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles, stylesButton} from './styles';
import IconButton from './IconButton';
import {useNavigation} from '@react-navigation/native';

function ButtonGroup(props) {
  const dataButton = [
    {
      img: require('../../assets/img/add-free-icon-font_20.png'),
      label: 'Postular',
    },
    {
      img: require('../../assets/img/heart-free-icon-font_20.png'),
      label: '1.1M',
    },
    {
      img: require('../../assets/img/comment-alt-free-icon-font_20.png'),
      label: '11k',
    },
    {
      img: require('../../assets/img/share-free-icon-font_20.png'),
      label: 'SHARE',
    },
  ];
  const {navigate} = useNavigation();
  return (
    <View style={[stylesButton.ContainerButtons]}>
      {dataButton.map((element, index) => {
        return (
          <IconButton
            key={index}
            img={element.img}
            label={element.label}
            onPress={() => navigate('ApplyJob')}
          />
        );
      })}
    </View>
  );
}

export default ButtonGroup;
