import React from 'react';

import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
// import Form from '../../components/Form';
// import Input from '../../components/Input';
// import {useForm} from 'react-hook-form';
export default function editProffile() {
  return (
    <View style={styles.container}>
      {/* <Form {...{register, setValue, errors}}>
        <Input name="date" placeholder="nombre de perfil" />
        <Input name="username" placeholder="apellido" />
      </Form> */}
      <TouchableOpacity
        //  onPress={handleSubmit(onSubmit, onError)}
        style={styles.btn}
        activeOpacity={0.6}>
        <Text style={styles.btnText}>seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
