import React, {createElement, useRef} from 'react';
import {View} from 'react-native';

export default function Form(props) {
  const {children, register, setValue, errors} = props;
  const Input = useRef([]);

  return (
    <View>
      {(Array.isArray(children) ? [...children] : [children]).map(
        (child, index) => {
          return child.props.name
            ? createElement(child.type, {
                ...child.props,
                ref: e => {
                  Input.current[index] = e;
                  register(child.props.name, {required: true});
                },
                key: `${child.props.name}-${index}`,
                onChangeText: text => setValue(child.props.name, text, true),
                onSubmitEditing: () => {
                  Input.current[index + 1]
                    ? Input.current[index + 1].focus()
                    : Input.current[index].blur();
                },
                blurOnSubmit: false,
                error: errors[child.props.name],
              })
            : child;
        },
      )}
    </View>
  );
}
