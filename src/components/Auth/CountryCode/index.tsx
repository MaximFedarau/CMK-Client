import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  AuthCountryCodeSelectButton,
  AuthCountryCodeLocationText,
  AuthCountryCodeNumberText,
} from '@components';
import { setCountryId } from '@store/countryId';
import { Countries, CountryInfo, NavigationProps } from '@types';

import { styles } from './styles';

interface Props extends CountryInfo {
  countryId: Countries;
}

export const AuthCountryCode: FC<Props> = ({ countryId, name, code }) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  const selectCountryId = () => {
    dispatch(setCountryId(countryId));
    navigation.goBack();
  };

  return (
    <AuthCountryCodeSelectButton
      style={({ pressed }) => [pressed ? styles.pressed : {}]}
      onPress={selectCountryId}
    >
      <AuthCountryCodeLocationText style={styles.text}>
        {name}
      </AuthCountryCodeLocationText>
      <AuthCountryCodeNumberText style={styles.text}>
        {code}
      </AuthCountryCodeNumberText>
    </AuthCountryCodeSelectButton>
  );
};
