import React, { useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { Icon } from '../icon';
import { Text } from '../text';

type ChecbokProps = {
  type?: 'primary' | 'secondary',
  disabled?: boolean
  value: boolean
  color?: string
  labelColor?: string
  labelSize?: 'small'| 'normal' | 'big'
  label?:string | JSX.Element
  onChangeValue: (value:boolean)=>void
}
const { colors } = theme;

/**
 *
 * @param value (*) boolean
 * @param onChangeValue (*) ()=>void
 * @param label string | JSX.Element
 * @param labelSize (default)small=12 | normal=14 | big=16
 * @returns
 */

const Checkbox: React.FC<ChecbokProps> = ({ disabled, label, labelColor, labelSize: labelSizeProp = 'small', value, color: colorProp, onChangeValue, type = 'primary' }) => {

  const color = useMemo(() => {
    if (type === 'secondary') { return colors.primary; }
    return colors.text;
  }, [type]);

  const labelSize = useMemo(() => {
    if (labelSizeProp === 'normal') {return 'small';}
    if (labelSizeProp === 'big') {return 'normal';}
    return 'xSmall';
  }, [labelSizeProp]);

  return (
    <Pressable style={[styles.container, { opacity: disabled ? 0.4 : 1 }]}
      onPress={() => { onChangeValue(!value);
      }}
      disabled={disabled} >
      {!value
        ? <Icon name="checkbox-blank-outline" color={colorProp ?? color} marginEnd={4} />
        : <Icon name="checkbox-marked" color={colorProp ?? color} marginEnd={4} />
      }
      {typeof label === 'string' ? <Text color={labelColor ?? color} size={labelSize}>{label}</Text> : label
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Checkbox;
