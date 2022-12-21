import React, { FC } from 'react';
import { Formik } from 'formik';

import {
  ContentScrollContainer,
  Logo,
  FormContentContainer,
  FormHeaderText,
  FormField,
  AuthFormButtons,
} from '@components';
import { NavigationAuthName } from '@types';

interface InitalValues {
  email: string;
  password: string;
}

export const LogIn: FC = () => {
  const initialValues: InitalValues = {
    email: '',
    password: '',
  };

  const restorePassword = () => {
    console.log('Restore password!');
  };

  const onSubmit = (values: InitalValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values: { email, password }, handleChange, handleSubmit }) => (
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
              onSubmit={handleSubmit}
            >
              Log In
            </AuthFormButtons>
          </FormContentContainer>
        </ContentScrollContainer>
      )}
    </Formik>
  );
};
