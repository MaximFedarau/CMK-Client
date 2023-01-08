import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  AuthCountryCodeSelectButton,
  AuthCountryCodeLocationText,
  AuthCountryCodeNumberText,
} from '@components';
import { setCountryId } from '@store/countryId';
import { COLORS } from '@constants';
import { Countries, CountryInfo, NavigationProps } from '@types';

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
      style={({ pressed }) => pressed && { backgroundColor: COLORS.polar }}
      onPress={selectCountryId}
    >
      <AuthCountryCodeLocationText>{name}</AuthCountryCodeLocationText>
      <AuthCountryCodeNumberText>{code}</AuthCountryCodeNumberText>
    </AuthCountryCodeSelectButton>
  );
};
