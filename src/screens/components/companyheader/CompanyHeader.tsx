import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Badge, Button, TextLink } from '../../../components';
import { theme } from '../../../theme';


type CompanyHeaderProps = {
  follow?: boolean
  setFollow?: Dispatch<SetStateAction<boolean>>
  company: any
  full?: boolean
  theme?: 'light' | 'dark'
}

const { colors } = theme;

const CompanyHeader: React.FC<CompanyHeaderProps> = ({
  follow,
  full = false,
  theme: themeProp = 'dark',
  setFollow,
  company }) => {

  return (
    <View style={styles.container}>
      <Avatar img={{ uri: company.image }} rounded marginRight={10} size={full ? 'big' : 'normal'} />

      <TextLink
        size={!full ? 'xSmall' : 'normal'}
        color={themeProp === 'dark' ? 'white' : colors.darkText}
        underlineHide
        onPress={() => console.warn('ABRIR PERFIL')}>{company.name}</TextLink>
      <Badge label="A" marginLeft={5} size={full ? 'normal' : 'small'} />

      <Button size={full ? 'medium' : 'small'}
        outline={follow}
        type={themeProp === 'dark' ? 'secondary' : 'primary'}
        marginStart={full ? 30 : 11}
        onPress={() => setFollow && setFollow(!follow)} >
        {follow ? 'seguir' : 'siguiendo'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CompanyHeader;
