import React, { useEffect, useState } from 'react';
import { View, TextInput, TextInputProps, Pressable, PressableProps } from 'react-native';
import { Box } from '../../containers';
import { paddingApp, theme } from '../../theme';
import { Icon } from '../icon';
import { Text } from '../text';
import { stylesInput } from './styles';



const { colors, fontSize } = theme;

type InputBoxProps = TextInputProps & PressableProps & {
  LabelBackgroundColor?: string;
  labelColor?: string;
  label: string;
  hint?: string | JSX.Element;
  hintColor?: string;
  hintAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  icon?: JSX.Element;
}
const InputBox: React.FC<InputBoxProps> = ({ label, hint, value, hintAlign = 'auto', hintColor = colors.placeholder, labelColor = colors.text, LabelBackgroundColor = 'white', icon, ...inputProps }) => {
  return <View style={stylesInput.container}>
    <Text size="small" color={labelColor} fontWeight="semibold" style={[stylesInput.label, { backgroundColor: LabelBackgroundColor }]}>{label}</Text>
    <View>
      <TextInput
        value={value}
        style={[stylesInput.input, {
          fontSize: value ? fontSize.base : fontSize.sm,
        }]}
        placeholderTextColor={colors.placeholder}
        {...inputProps} />
      {icon}
    </View>
    {hint
      ? typeof hint === 'string'
        ? <Box paddingVertical={0} paddingHorizontal={paddingApp / 2}>
          <Text size="xSmall" color={hintColor} textAlign={hintAlign}>{hint}</Text>
        </Box>
        : hint
      : null}
  </View>;
};

type InputsProps = InputBoxProps & {
  type?: 'text' | 'textarea' | 'password'
};

const Input: React.FC<InputsProps> = ({ type = 'text', numberOfLines = 5, ...inputProps }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => { console.log({ value }); }, [value]);

  if (type === 'password') {
    return (
      <InputBox
        value={value} 
        onChangeText={setValue}
        secureTextEntry={!showPassword}
        placeholder="••••••••••"
        {...inputProps}
        icon={
          <Pressable onPress={() => {
            setShowPassword(!showPassword);
          }} style={[stylesInput.icon]}>
            <Icon size={20} color={colors.placeholder} name={!showPassword ? 'eye-outline' : 'eye-off-outline'} />
          </Pressable>
        } />
    );
  }

  if (type === 'textarea') {
    return <InputBox
      value={value}
      multiline
      onChangeText={setValue}
      numberOfLines={numberOfLines}
      textAlignVertical="top"
      {...inputProps}
    />;
  }

  return (
    <InputBox
      value={value}
      onChangeText={setValue}
      {...inputProps}
    />
  );
};

export default Input;
