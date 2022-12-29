import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {
  AuthPhoneFieldContainer,
  FormLabel,
  AuthPhoneFieldInputContainer,
  AuthCountryCodeDisplayButton,
  AuthCountryCodeDisplayButtonText,
  AuthPhoneNumberInput,
} from '@components';
import { countryCodeSelector } from '@store/countryCode';
import { NavigationAuthName, NavigationProps } from '@types';
import ChevronRight from '@assets/images/chevronRight.svg';

import { styles } from './styles';

export const AuthPhoneField: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const countryCode = useSelector(countryCodeSelector);

  const selectCountryCode = () =>
    navigation.navigate(NavigationAuthName.COUNTRY_CODE_SELECTION);

  return (
    <AuthPhoneFieldContainer>
      <FormLabel>Phone Number</FormLabel>
      <AuthPhoneFieldInputContainer>
        <AuthCountryCodeDisplayButton onPress={selectCountryCode}>
          <AuthCountryCodeDisplayButtonText
            style={styles.countryCodeButtonText}
          >
            {countryCode}
          </AuthCountryCodeDisplayButtonText>
          <ChevronRight style={styles.countryCodeButtonChevron} />
        </AuthCountryCodeDisplayButton>
        <AuthPhoneNumberInput
          keyboardType="number-pad"
          style={styles.phoneNumberInput}
        />
      </AuthPhoneFieldInputContainer>
    </AuthPhoneFieldContainer>
  );
};
