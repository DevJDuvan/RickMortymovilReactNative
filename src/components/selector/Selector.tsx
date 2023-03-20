import React, { useState } from 'react';
import { FlexStyle, PressableProps, View } from 'react-native';
import { Pressable } from 'react-native';
import { theme } from '../../theme';
import { Icon } from '../icon';
import { Text } from '../../components';
type SelectorProps = Omit<PressableProps, 'style'> &
  FlexStyle & {
    colorText?: string,
    colorbg?: string,
    paddingHorizontal?: number,
    padding?: number,
    typeSelector?:'primary' | 'secondary' ,
    opacity?: number,
    item: { uuid: any | undefined; name: string },
    data: { uuid: any | undefined; name: string }[],
    setData: any,
  };

const Selector: React.FC<SelectorProps> = ({
  colorText = 'white',
  colorbg = 'white',
  paddingHorizontal = 10,
  padding = 3,
  typeSelector='primary',
  opacity = 0.1,
  item,
  data,
  onPress,
  setData,
  ...propsPressable
}) => {
  const [Select, setSelect] = useState(false);
  var lisr: { uuid: any }[] = data;
  function delet() {
    const result = data.filter(dat => dat.uuid !== item.uuid);
    console.log('funciona' + result);
    return result;
  }
  function deletpreference() {
    setData(delet());
    console.log('----' + data);
    setSelect(false);

  }
  function add() {
    console.log('lista antes de agregar' + JSON.stringify(data));
    lisr.push({ uuid: item.uuid });
    setData(lisr);
    setSelect(true);
    console.log('lista despues' + data);
  }

  return (
    <Pressable style={{ marginRight:4,marginBottom: typeSelector==='primary'? 9:2, height: 32 }}
      onPress={typeSelector == 'primary'? (Select ? deletpreference : add) :undefined }>
      <View style={{
        padding: padding,
        height: typeSelector==='primary'?'100%':'80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: paddingHorizontal,
        paddingVertical: 2,
        borderRadius:typeSelector==='primary'?8 : 4,
      }}>
        <View style={{
          opacity: Select ? 0.4 : opacity,
          borderRadius:typeSelector==='primary'?8 : 4,
          position: 'absolute',
          backgroundColor: colorbg, bottom: 0, right: 0, top: 0, left: 0,
        }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text size="small" opacity={1} color={colorText} fontWeight="semibold" style={{ marginRight:typeSelector==='primary'?0 : 6 ,textTransform:typeSelector==='primary'?'uppercase' : 'none'}}>
            {item.name}
          </Text>
          {typeSelector==='secondary'? <Pressable onPress={() => { console.log('cerrar'); }}>
            <Icon size={16} color={colorText} name="close" />
          </Pressable> : undefined}
        </View>
      </View>
    </Pressable>


  );
};

export default Selector;
