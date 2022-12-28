import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { AuthCountryCode } from '@components';
import { COUNTRIES_INFO } from '@constants';
import { Countries } from '@types';

export const CountryCodeSelection: FC = () => (
  <FlatList
    data={Object.keys(COUNTRIES_INFO)}
    renderItem={({ item }) => (
      <AuthCountryCode {...COUNTRIES_INFO[item as Countries]} />
    )}
  />
);
