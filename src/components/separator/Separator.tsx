import React from 'react';
import {FlexStyle, StyleSheet, Text, View} from 'react-native';

type SeparatorProps = FlexStyle & {
  children: JSX.Element | string;
};

const Separator: React.FC<SeparatorProps> = ({children, ...restSeparator}) => {
  return (
    <View style={styles.container} {...restSeparator}>
      <View style={styles.line} />
      {typeof children === 'string' ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <View>{children}</View>
      )}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  line: {
    backgroundColor: '#E5E7EB',
    height: 1,
    flex: 1,
  },
  text: {
    color: '#9CA3AF',
    marginHorizontal: 10,
  },
});
export default Separator;
