import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import { WraperLoginPage } from './LoginPage.styled';

const Login = () => {
  return (
    <WraperLoginPage>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </WraperLoginPage>
  );
};

export default Login;
