import React, { FC } from 'react';
import { ScrollViewProps } from 'react-native';

import { ScrollContainer } from '@components';

import { styles } from './styles';

export const ContentScrollContainer: FC<ScrollViewProps> = ({
  children,
  ...props
}) => {
  return (
    <ScrollContainer
      {...props}
      bounces={false}
      contentContainerStyle={styles.contentContainer}
    >
      {children}
    </ScrollContainer>
  );
};
