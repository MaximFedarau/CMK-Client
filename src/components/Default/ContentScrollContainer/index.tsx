import React, { FC } from 'react';
import { ScrollViewProps } from 'react-native';

import { SafeAreaContainer, ScrollContainer } from '@components';

import { styles } from './styles';

export const ContentScrollContainer: FC<ScrollViewProps> = ({
  children,
  ...props
}) => {
  return (
    <SafeAreaContainer>
      <ScrollContainer
        {...props}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
      </ScrollContainer>
    </SafeAreaContainer>
  );
};
