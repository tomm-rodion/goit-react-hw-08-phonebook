import { Helmet } from 'react-helmet';
import {
  HomeButtonLink,
  HomeNameApp,
  HomeTitle,
  Introduction,
  Span,
  WraperHomePage,
} from './HomePage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAuth } from 'hooks/useAuth';

const Home = () => {
  const { user } = useAuth();
  return (
    <WraperHomePage>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <HomeTitle>
        Welcome to the <HomeNameApp>Phonebook</HomeNameApp> web-site!
      </HomeTitle>

      {!selectIsLoggedIn && (
        <>
          <Introduction>
            Here you can create your own phone book very easily Register or
            login to manage your contacts.
          </Introduction>
          <Span>
            <HomeButtonLink to="/register">sign-up</HomeButtonLink>
            <HomeButtonLink to="/login">login</HomeButtonLink>
          </Span>
        </>
      )}
      <Introduction>
        Welcome {user.name} you are already registered In our application you
        can: <br />
        -add contacts <br />
        -delete contacts <br />
        -search for the contact you need in the list of your contacts
        <br />
        -our application itself will take care that you do not accidentally add
        the same contacts
      </Introduction>
      <HomeButtonLink to="/contacts">contacts</HomeButtonLink>
    </WraperHomePage>
  );
};

export default Home;
