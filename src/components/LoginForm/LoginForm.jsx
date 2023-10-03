import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from 'redux/auth/operations';
import { LoginButton, LoginField } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    console.log(values);
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <LoginField
        required
        autoComplete="off"
        fullWidth
        id="email"
        name="email"
        label="Email"
        placeholder="batman@gmail.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <LoginField
        required
        autoComplete="off"
        fullWidth
        id="password"
        name="password"
        label="Password"
        placeholder="qwe12345"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <LoginButton fullWidth type="submit">
        Log In
      </LoginButton>
    </LoginForm>
  );
};
