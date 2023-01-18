import React, { FC } from 'react';
import { ScrollViewProps, Platform } from 'react-native';

import {
  SafeAreaContainer,
  ScrollContainer,
  KeyboardAvoidingContainer,
} from '@components';

import { styles } from './styles';

export const ContentScrollContainer: FC<ScrollViewProps> = ({
  children,
  ...props
}) => {
  return (
    <SafeAreaContainer>
      <KeyboardAvoidingContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollContainer
          {...props}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {children}
        </ScrollContainer>
      </KeyboardAvoidingContainer>
    </SafeAreaContainer>
  );
};
