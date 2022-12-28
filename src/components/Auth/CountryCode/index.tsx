import React, { FC } from 'react';

import {
  AuthCountryCodeSelectButton,
  AuthCountryCodeCountryText,
  AuthCountryCodeCodeText,
} from '@components';
import { CountryInfo } from '@types';

import { styles } from './styles';

export const AuthCountryCode: FC<CountryInfo> = ({ name, code }) => (
  <AuthCountryCodeSelectButton
    style={({ pressed }) => [pressed ? styles.pressed : {}]}
  >
    <AuthCountryCodeCountryText style={styles.text}>
      {name}
    </AuthCountryCodeCountryText>
    <AuthCountryCodeCodeText style={styles.text}>
      {code}
    </AuthCountryCodeCodeText>
  </AuthCountryCodeSelectButton>
);
