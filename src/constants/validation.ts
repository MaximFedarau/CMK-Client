import { object, string, ref } from 'yup';

export const logInSchema = object().shape({
  email: string()
    .trim()
    .email('Email is invalid.')
    .required('Email is required.'),
  password: string().required('Password is required.'),
});

export const signUpSchema = object().shape({
  name: string().trim().required('Name is required.'),
  email: string()
    .trim()
    .email('Email is invalid.')
    .required('Email is required.'),
  password: string()
    .required('Password is required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password is too weak.',
    ),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match.')
    .required('Confirm your password.'),
});
