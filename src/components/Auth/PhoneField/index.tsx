import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  FormItemContainer,
  FormLabel,
  AuthPhoneFieldInputContainer,
  AuthCountryCodeDisplayButton,
  AuthCountryCodeDisplayButtonText,
  AuthPhoneNumberInput,
} from '@components';
import { COLORS } from '@constants';
import { NavigationAuthName, NavigationProps } from '@types';
import ChevronRight from '@assets/images/chevronRight.svg';

import { styles } from './styles';

interface Props {
  countryCode: string;
  phoneNumber: string;
  onPhoneNumberChange: (newPhoneNumber: string) => void;
  disabled?: boolean;
}

export const AuthPhoneField: FC<Props> = ({
  countryCode,
  phoneNumber,
  onPhoneNumberChange,
  disabled,
}) => {
  const navigation = useNavigation<NavigationProps>();

  const selectCountryCode = () =>
    navigation.navigate(NavigationAuthName.COUNTRY_CODE_SELECTION);

  return (
    <FormItemContainer>
      <FormLabel>Phone Number</FormLabel>
      <AuthPhoneFieldInputContainer>
        <AuthCountryCodeDisplayButton
          disabled={disabled}
          onPress={selectCountryCode}
        >
          <AuthCountryCodeDisplayButtonText
            style={disabled && { color: COLORS.gray }}
          >
            {countryCode}
          </AuthCountryCodeDisplayButtonText>
          <ChevronRight
            stroke={disabled ? COLORS.gray : COLORS.blue}
            style={styles.countryCodeButtonChevron}
          />
        </AuthCountryCodeDisplayButton>
        <AuthPhoneNumberInput
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
          editable={!disabled}
        />
      </AuthPhoneFieldInputContainer>
    </FormItemContainer>
  );
};
