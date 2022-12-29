import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  AuthPhoneFieldContainer,
  FormLabel,
  AuthPhoneFieldInputContainer,
  AuthCountryCodeDisplayButton,
  AuthCountryCodeDisplayButtonText,
  AuthPhoneNumberInput,
} from '@components';
import { NavigationAuthName, NavigationProps } from '@types';
import ChevronRight from '@assets/images/chevronRight.svg';

import { styles } from './styles';

interface Props {
  countryCode: string;
  phoneNumber: string;
  onPhoneNumberChange: (newPhoneNumber: string) => void;
}

export const AuthPhoneField: FC<Props> = ({
  countryCode,
  phoneNumber,
  onPhoneNumberChange,
}) => {
  const navigation = useNavigation<NavigationProps>();

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
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
        />
      </AuthPhoneFieldInputContainer>
    </AuthPhoneFieldContainer>
  );
};
