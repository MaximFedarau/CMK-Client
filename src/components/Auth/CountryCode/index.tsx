import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  AuthCountryCodeSelectButton,
  AuthCountryCodeCountryText,
  AuthCountryCodeNumberText,
} from '@components';
import { setCountryCode } from '@store/countryCode';
import { CountryInfo, NavigationProps } from '@types';

import { styles } from './styles';

export const AuthCountryCode: FC<CountryInfo> = ({ name, code }) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  const selectCountryCode = () => {
    dispatch(setCountryCode(code));
    navigation.goBack();
  };

  return (
    <AuthCountryCodeSelectButton
      style={({ pressed }) => [pressed ? styles.pressed : {}]}
      onPress={selectCountryCode}
    >
      <AuthCountryCodeCountryText style={styles.text}>
        {name}
      </AuthCountryCodeCountryText>
      <AuthCountryCodeNumberText style={styles.text}>
        {code}
      </AuthCountryCodeNumberText>
    </AuthCountryCodeSelectButton>
  );
};
