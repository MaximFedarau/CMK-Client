import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  AuthPhoneFieldContainer,
  FormLabel,
  AuthPhoneFieldInputContainer,
  AuthCountryCodeButton,
  AuthCountryCodeButtonText,
  AuthPhoneNumberInput,
} from '@components';
import { NavigationAuthName, NavigationProps } from '@types';
import ChevronRight from '@assets/images/chevronRight.svg';

import { styles } from './styles';

export const AuthPhoneField: FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const selectCountryCode = () =>
    navigation.navigate(NavigationAuthName.COUNTRY_CODE_SELECTION);

  return (
    <AuthPhoneFieldContainer>
      <FormLabel>Phone Number</FormLabel>
      <AuthPhoneFieldInputContainer>
        <AuthCountryCodeButton onPress={selectCountryCode}>
          <AuthCountryCodeButtonText style={styles.countryCodeButtonText}>
            +1234
          </AuthCountryCodeButtonText>
          <ChevronRight style={styles.countryCodeButtonChevron} />
        </AuthCountryCodeButton>
        <AuthPhoneNumberInput
          keyboardType="number-pad"
          style={styles.phoneNumberInput}
        />
      </AuthPhoneFieldInputContainer>
    </AuthPhoneFieldContainer>
  );
};
