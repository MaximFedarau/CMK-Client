import { StyleSheet } from 'react-native';

import { SIZES, COLORS } from '@constants';

export const styles = StyleSheet.create({
  countryCodeButtonText: {
    includeFontPadding: false,
  },
  countryCodeButtonChevron: {
    marginLeft: SIZES.sm,
    width: SIZES['2xl'],
    height: SIZES['2xl'],
  },
  phoneNumberInput: {
    includeFontPadding: false,
  },
  disabledText: {
    color: COLORS.gray,
  },
});
