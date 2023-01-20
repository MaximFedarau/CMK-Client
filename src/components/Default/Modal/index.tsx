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
import { COLORS } from '@constants';

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
        <ModalTitle>{title}</ModalTitle>
        <ModalContentText>{children}</ModalContentText>
        <ModalCloseButton
          style={({ pressed }) => pressed && { backgroundColor: COLORS.polar }}
          onPress={props.onRequestClose}
        >
          <ModalCloseButtonText>{closeButtonText}</ModalCloseButtonText>
        </ModalCloseButton>
      </ModalContentContainer>
    </ModalContainerButton>
  </RNModal>
);
