import React, { FC } from 'react';

import {
  AuthPhoneFieldContainer,
  FormLabel,
  AuthPhoneFieldInputContainer,
  AuthCountryCodeButton,
  AuthCountryCodeButtonText,
} from '@components/Default';
import ChevronRight from '@assets/images/chevronRight.svg';

import { styles } from './styles';

export const AuthPhoneField: FC = () => {
  return (
    <AuthPhoneFieldContainer>
      <FormLabel>Phone Number</FormLabel>
      <AuthPhoneFieldInputContainer>
        <AuthCountryCodeButton>
          <AuthCountryCodeButtonText style={styles.countryCodeButtonText}>
            +1234
          </AuthCountryCodeButtonText>
          <ChevronRight style={styles.countryCodeButtonChevron} />
        </AuthCountryCodeButton>
      </AuthPhoneFieldInputContainer>
    </AuthPhoneFieldContainer>
  );
};