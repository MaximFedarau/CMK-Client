import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { Formik } from 'formik';

import {
  ContentScrollContainer,
  Logo,
  FormContentContainer,
  FormHeaderText,
  AuthPhoneField,
  AuthFormButtons,
  Modal,
  FormField,
} from '@components';
import { countryIdSelector } from '@store/countryId';
import { COUNTRIES_INFO } from '@constants';
import { NavigationAuthName } from '@types';

interface InitialValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp: FC = () => {
  const countryId = useSelector(countryIdSelector);
  const countryCode = COUNTRIES_INFO[countryId].code;

  const modalInitialState = {
    visible: false,
    title: '',
    children: '',
    closeButtonText: '',
  };
  const initialValues: InitialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalParams, setModalParams] = useState(modalInitialState);
  const [showSignUpSecondStep, setShowSignUpSecondStep] = useState(false);

  const onCloseModal = () => setModalParams(modalInitialState);

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

  const onSignUpSecondStepSubmit = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSignUpSecondStepSubmit}>
      {({
        values: { name, email, password, confirmPassword },
        handleChange,
        handleSubmit,
      }) => (
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
                <FormField
                  value={name}
                  labelText="Your Name"
                  onChangeText={handleChange('name')}
                />
                <FormField
                  value={email}
                  labelText="Your Email"
                  onChangeText={handleChange('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <FormField
                  value={password}
                  labelText="Password"
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  isPasswordInput
                  autoCapitalize="none"
                />
                <FormField
                  value={confirmPassword}
                  labelText="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry
                  isPasswordInput
                  autoCapitalize="none"
                />
              </>
            )}
            <AuthFormButtons
              type={NavigationAuthName.SIGN_UP}
              onSubmit={
                showSignUpSecondStep ? handleSubmit : onSignUpFirstStepSubmit
              }
            >
              Next
            </AuthFormButtons>
            <Modal {...modalParams} onRequestClose={onCloseModal} />
          </FormContentContainer>
        </ContentScrollContainer>
      )}
    </Formik>
  );
};
