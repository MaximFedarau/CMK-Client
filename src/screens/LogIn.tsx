import React, { FC } from 'react';
import { Formik } from 'formik';

import {
  ContentScrollContainer,
  Logo,
  AuthContentContainer,
  AuthWelcomeText,
  FormField,
} from '@components';

interface InitalValues {
  email: string;
  password: string;
}

export const LogIn: FC = () => {
  const initialValues: InitalValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: InitalValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values: { email, password }, handleChange }) => (
        <ContentScrollContainer>
          <Logo />
          <AuthContentContainer>
            <AuthWelcomeText>Log In To Woorkroom</AuthWelcomeText>
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
              secureTextEntry
              isPasswordInput
            />
          </AuthContentContainer>
        </ContentScrollContainer>
      )}
    </Formik>
  );
};
