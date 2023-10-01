import * as yup from 'yup';

export const validationRegistrateSchema = yup.object().shape({
  name: yup
    .string('Name may contain only letters, apostrophe, dash and spaces.')
    .required('This field is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('This field is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required'),
});

export const validationLogInSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('This field is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required'),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required(),
  number: yup
    .string()
    .min(2, <em>Too Short!</em>)
    .max(15, <em>Too Long!</em>)
    .matches(phoneRegExp, <em>Phone number is not valid</em>)
    .required(),
});
