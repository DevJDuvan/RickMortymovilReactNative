import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  View,
} from 'react-native';
import { Icon } from '../icon';
interface Props {
  label: string|any;
  data: Array<{ id: number; name: string }>|any;
  onSelect: (item: {id: number; name: string }|any) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: React.SetStateAction<undefined>): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
    console.log('jkjkjkjk')
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <Pressable style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.name}</Text>
    </Pressable>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            
            <FlatList
        
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.name) || label}
      </Text>
      <Icon style={styles.icon}  name="chevron-down" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   // borderRadius:3,
    paddingHorizontal:15,
    flexDirection: 'row',
   justifyContent:'space-between',
    alignItems: 'center',
   // borderWidth:1,
    //borderColor:'#D1D5DB',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
  
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  maxHeight:'40%'
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default Dropdown;