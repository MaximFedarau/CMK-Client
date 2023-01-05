import React, { FC, useState } from 'react';
import { Formik, FormikErrors } from 'formik';

import {
  ContentScrollContainer,
  Logo,
  FormContentContainer,
  FormHeaderText,
  FormField,
  AuthFormButtons,
  Modal,
  TextHighlighter,
  ModalProps,
} from '@components';
import { logInSchema } from '@constants';
import { NavigationAuthName } from '@types';

interface InitalValues {
  email: string;
  password: string;
}

export const LogIn: FC = () => {
  const modalInitialState: ModalProps = {
    visible: false,
    title: '',
    children: '',
    closeButtonText: '',
  };
  const initialValues: InitalValues = {
    email: '',
    password: '',
  };

  const [modalParams, setModalParams] = useState(modalInitialState);

  const onCloseModal = () => setModalParams(modalInitialState);

  const restorePassword = () => console.log('Restore password!');

  const handleErrors = (errors: FormikErrors<InitalValues>) =>
    setModalParams({
      visible: true,
      title: 'Invalid Data',
      children: (
        <>
          {Object.entries(errors).map(([fieldName, text]) => (
            <TextHighlighter keyword={fieldName} key={fieldName}>
              {text}
            </TextHighlighter>
          ))}
        </>
      ),
      closeButtonText: 'OK',
    });

  const onSubmit = (values: InitalValues) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={logInSchema}
      validateOnMount
    >
      {({
        values: { email, password },
        errors,
        handleChange,
        handleSubmit,
        isValid,
      }) => (
        <ContentScrollContainer>
          <Logo />
          <FormContentContainer>
            <FormHeaderText>Log In To Woorkroom</FormHeaderText>
            <FormField
              value={email}
              onChangeText={handleChange('email')}
              labelText="Your Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormField
              value={password}
              onChangeText={handleChange('password')}
              labelText="Password"
              additionalLabelText="Forgot password?"
              onAdditionalLabelPress={restorePassword}
              secureTextEntry
              isPasswordInput
              autoCapitalize="none"
            />
            <AuthFormButtons
              type={NavigationAuthName.LOG_IN}
              onSubmit={isValid ? handleSubmit : () => handleErrors(errors)}
            >
              Log In
            </AuthFormButtons>
            <Modal {...modalParams} onRequestClose={onCloseModal} />
          </FormContentContainer>
        </ContentScrollContainer>
      )}
    </Formik>
  );
};
