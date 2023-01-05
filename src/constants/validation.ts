import { object, string } from 'yup';

export const logInSchema = object().shape({
  email: string()
    .trim()
    .email('Email is invalid.')
    .required('Email is required.'),
  password: string().required('Password is required.'),
});
