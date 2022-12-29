import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { isValidPhoneNumber } from 'libphonenumber-js';

import {
  ContentScrollContainer,
  Logo,
  FormContentContainer,
  FormHeaderText,
  AuthPhoneField,
  AuthFormButtons,
  Modal,
} from '@components';
import { countryIdSelector } from '@store/countryId';
import { COUNTRIES_INFO } from '@constants';
import { NavigationAuthName } from '@types';

const MODAL_INITIAL_STATE = {
  visible: false,
  title: '',
  children: '',
  closeButtonText: '',
};

export const SignUp: FC = () => {
  const countryId = useSelector(countryIdSelector);
  const countryCode = COUNTRIES_INFO[countryId].code;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalParams, setModalParams] = useState(MODAL_INITIAL_STATE);

  const onCloseModal = () => setModalParams(MODAL_INITIAL_STATE);

  const onValidatePhoneNumber = () => {
    const tel = countryCode + phoneNumber.trim();
    const phoneNumberValidity = isValidPhoneNumber(tel, countryId);
    if (!phoneNumberValidity)
      setModalParams({
        visible: true,
        title: 'Sorry',
        children: 'Invalid phone number. Check it out and try again.',
        closeButtonText: 'OK',
      });
  };

  return (
    <ContentScrollContainer>
      <Logo />
      <FormContentContainer>
        <FormHeaderText>Sign Up To Woorkroom</FormHeaderText>
        <AuthPhoneField
          countryCode={countryCode}
          phoneNumber={phoneNumber}
          onPhoneNumberChange={setPhoneNumber}
        />
        <AuthFormButtons
          type={NavigationAuthName.SIGN_UP}
          onSubmit={onValidatePhoneNumber}
        >
          Next
        </AuthFormButtons>
        <Modal {...modalParams} onRequestClose={onCloseModal} />
      </FormContentContainer>
    </ContentScrollContainer>
  );
};
