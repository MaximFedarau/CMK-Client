import React, { FC, useState, ReactNode } from 'react';
import { LayoutAnimation, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  isValidPhoneNumber,
  validatePhoneNumberLength,
  ValidatePhoneNumberLengthResult,
} from 'libphonenumber-js';
import { Formik, FormikErrors } from 'formik';

import {
  ContentScrollContainer,
  Logo,
  FormContentContainer,
  FormHeaderText,
  AuthPhoneField,
  AuthFormButtons,
  Modal,
  ModalProps,
  TextHighlighter,
  AuthOTPField,
  FormField,
} from '@components';
import { countryIdSelector } from '@store/countryId';
import { COUNTRIES_INFO, signUpSchema, ANIMATION_SPEED } from '@constants';
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

  const modalInitialState: ModalProps = {
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
  const [oneTimePassword, setOneTimePassword] = React.useState<string[]>(
    new Array(4).fill(''),
  );

  const showModal = (title: string, children: ReactNode) =>
    setModalParams({
      visible: true,
      title,
      children,
      closeButtonText: 'OK',
    });
  const onCloseModal = () => setModalParams(modalInitialState);

  const transformLengthValidityResult = (
    result?: ValidatePhoneNumberLengthResult,
  ) => {
    if (!result) return result;
    const readableResult = result.replaceAll('_', ' ');
    return readableResult[0] + readableResult.slice(1).toLowerCase();
  };
  const onSignUpFirstStepSubmit = () => {
    const tel = countryCode + phoneNumber.trim();
    const phoneNumberValidity = isValidPhoneNumber(tel, countryId);
    if (!phoneNumberValidity || !new RegExp(/^\d+$/).test(phoneNumber.trim()))
      showModal(
        'Invalid Phone Number',
        `${
          transformLengthValidityResult(
            validatePhoneNumberLength(tel, countryId),
          ) || 'Invalid format'
        }. Check it out and try again.`,
      );
    else {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          ANIMATION_SPEED.slow,
          'easeInEaseOut',
          'opacity',
        ),
      );
      setShowSignUpSecondStep(true);
    }
  };

  const validateOneTimePassword = () => {
    const code = oneTimePassword.join('');
    if (code.length < oneTimePassword.length) {
      showModal(
        'Invalid Verification Code',
        'Enter the complete verification code.',
      );
      return false;
    }

    if (!new RegExp(/^\d+$/).test(code)) {
      showModal(
        'Invalid Verification Code',
        'Your data contains invalid characters.',
      );
      return false;
    }

    return true;
  };

  const handleErrors = (errors: FormikErrors<InitialValues>) => {
    if (!validateOneTimePassword()) return;
    showModal(
      'Invalid Data',
      <>
        {Object.entries(errors).map(([fieldName, text]) => (
          <TextHighlighter keyword={fieldName} key={fieldName}>
            {text}
          </TextHighlighter>
        ))}
      </>,
    );
  };

  const onSignUpSecondStepSubmit = (values: InitialValues) => {
    if (!validateOneTimePassword()) return;
    const code = oneTimePassword.join(''),
      tel = countryCode + phoneNumber.trim();
    console.log(tel, code, values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSignUpSecondStepSubmit}
      validationSchema={signUpSchema}
      validateOnMount
    >
      {({
        values: { name, email, password, confirmPassword },
        errors,
        handleChange,
        handleSubmit,
        isValid,
      }) => (
        <ContentScrollContainer>
          <Logo />
          <FormContentContainer>
            {/* Wrap in <View> to make all components go up when LayoutAnimation is active */}
            <View>
              <FormHeaderText>Sign Up To Woorkroom</FormHeaderText>
              <AuthPhoneField
                countryCode={countryCode}
                phoneNumber={phoneNumber}
                onPhoneNumberChange={setPhoneNumber}
                disabled={showSignUpSecondStep}
              />
            </View>
            {showSignUpSecondStep && (
              <>
                <AuthOTPField
                  value={oneTimePassword}
                  onChange={setOneTimePassword}
                />
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
                showSignUpSecondStep
                  ? isValid
                    ? handleSubmit
                    : () => handleErrors(errors)
                  : onSignUpFirstStepSubmit
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
