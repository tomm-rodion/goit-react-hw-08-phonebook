import { validationRegistrateSchema } from 'utils/validationSchema';

import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { useFormik } from 'formik';
import { register } from 'redux/auth/operations';
import {
  AuthButton,
  AuthField,
  AuthForm,
  WraperAuthForm,
} from './RegisterForm.styled';

export function RegisterForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => Notiflix.Notify.success('You have successfully registered'))
      .catch(() =>
        Notiflix.Notify.failure(
          'Something went wrong. Reload the page or enter another email...'
        )
      );
    resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationRegistrateSchema,
    onSubmit: handleSubmit,
  });

  return (
    <WraperAuthForm>
      <AuthForm onSubmit={formik.handleSubmit}>
        <AuthField
          required
          autoComplete="off"
          fullWidth
          id="name"
          name="name"
          label="Name"
          placeholder="Jacob"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <AuthField
          required
          autoComplete="off"
          fullWidth
          id="email"
          name="email"
          label="Email"
          placeholder="jacob12345@mail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <AuthField
          required
          autoComplete="off"
          fullWidth
          id="password"
          name="password"
          label="Password"
          placeholder="Jacob123"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <AuthButton fullWidth type="submit">
          Register
        </AuthButton>
      </AuthForm>
    </WraperAuthForm>
  );
}
