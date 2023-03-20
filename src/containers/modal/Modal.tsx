import React, { useMemo } from 'react';
import { Modal as ModalRN, ModalProps as ModalPropsRN, View, Pressable } from 'react-native';
import { Icon } from '../../components';
import { Card } from '../card';
import { styles } from './styles';

type ModalProps = ModalPropsRN & {
  children: JSX.Element | JSX.Element[]
  sticky?: 'top' | 'bottom';
}

/**
 *
 * @param  visible (*) boolean
 * @param  onRequestClose (*) ()=>void
 * @param  sticky (?) 'top' | 'bottom'
 */
const Modal: React.FC<ModalProps> = ({ children, onRequestClose, sticky, ...rest }) => {
  const stylesSticky = useMemo(() => {
    let position;
    if (sticky === 'bottom') { position = { ...styles.bottom }; }
    if (sticky === 'top') { position = { ...styles.top }; }
    return [styles.sticky, position];
  }, [sticky]);

  return (
    <ModalRN
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}
      {...rest}
    >
      <Card sticky={sticky} style={[styles.shadow, sticky ? stylesSticky : styles.normal ]}>
        <Pressable onPress={onRequestClose} style={[styles.btnClose]}>
          <Icon name="close" />
        </Pressable>
        <View>
          {children}
        </View>
      </Card>
    </ModalRN>
  );
};

export default Modal;
