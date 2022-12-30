import React, { FC, useState } from 'react';
import { Text } from 'react-native';
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
  const [showSignUpSecondStep, setShowSignUpSecondStep] = useState(false);

  const onCloseModal = () => setModalParams(MODAL_INITIAL_STATE);

  const onSignUpFirstStepSubmit = () => {
    const tel = countryCode + phoneNumber.trim();
    const phoneNumberValidity = isValidPhoneNumber(tel, countryId);
    if (!phoneNumberValidity)
      setModalParams({
        visible: true,
        title: 'Sorry',
        children: 'Invalid phone number. Check it out and try again.',
        closeButtonText: 'OK',
      });
    else setShowSignUpSecondStep(true);
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
          disabled={showSignUpSecondStep}
        />
        {showSignUpSecondStep && (
          <>
            <Text>Next Step</Text>
          </>
        )}
        <AuthFormButtons
          type={NavigationAuthName.SIGN_UP}
          onSubmit={onSignUpFirstStepSubmit}
        >
          Next
        </AuthFormButtons>
        <Modal {...modalParams} onRequestClose={onCloseModal} />
      </FormContentContainer>
    </ContentScrollContainer>
  );
};
