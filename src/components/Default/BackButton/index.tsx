import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

import { BackButtonPressable } from '@components';
import { NavigationProps } from '@types';
import ArrowLeft from '@assets/images/arrowLeft.svg';

export const BackButton: FC<HeaderBackButtonProps> = ({ canGoBack }) => {
  const navigation = useNavigation<NavigationProps>();

  const goBackHandler = () => {
    if (canGoBack) navigation.goBack();
  };

  return (
    <BackButtonPressable onPress={goBackHandler}>
      <ArrowLeft />
    </BackButtonPressable>
  );
};
