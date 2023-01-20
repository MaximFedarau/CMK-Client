import { Countries, CountryInfo } from '@types';

export const COUNTRIES_INFO: {
  [key in Countries]: CountryInfo;
} = {
  BY: {
    name: 'Belarus',
    code: '+375',
  },
  RU: {
    name: 'Russia',
    code: '+7',
  },
  US: {
    name: 'USA',
    code: '+1',
  },
};
