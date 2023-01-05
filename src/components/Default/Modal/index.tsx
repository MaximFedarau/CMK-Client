import React, { FC, ReactNode } from 'react';
import { ModalProps as RNModalProps, Modal as RNModal } from 'react-native';

import {
  ModalContainerButton,
  ModalContentContainer,
  ModalCloseButton,
  ModalTitle,
  ModalContentText,
  ModalCloseButtonText,
} from '@components';

import { styles } from './styles';

export interface ModalProps extends RNModalProps {
  title: string;
  children: ReactNode;
  closeButtonText: string;
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  closeButtonText,
  ...props
}) => (
  <RNModal animationType="fade" transparent statusBarTranslucent {...props}>
    <ModalContainerButton onPress={props.onRequestClose}>
      <ModalContentContainer
        onStartShouldSetResponder={() => true}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* onTouchEnd & onStartShouldSetResponder are here to allow user to click anywhere outside of the Modal to close it, but these events don't allow to click Modal itself. */}
        <ModalTitle style={styles.text}>{title}</ModalTitle>
        <ModalContentText style={styles.text}>{children}</ModalContentText>
        <ModalCloseButton activeOpacity={0.8} onPress={props.onRequestClose}>
          <ModalCloseButtonText style={styles.text}>
            {closeButtonText}
          </ModalCloseButtonText>
        </ModalCloseButton>
      </ModalContentContainer>
    </ModalContainerButton>
  </RNModal>
);
