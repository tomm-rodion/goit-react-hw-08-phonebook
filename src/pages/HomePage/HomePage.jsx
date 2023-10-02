import { Helmet } from 'react-helmet';
import {
  HomeButtonLink,
  HomeNameApp,
  HomeTitle,
  Introduction,
  Span,
  WraperHomePage,
} from './HomePage.styled';

const Home = () => {
  return (
    <WraperHomePage>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <HomeTitle>
        Welcome to the <HomeNameApp>Phonebook</HomeNameApp> web-site!
      </HomeTitle>
      <Introduction>
        Here you can create your own phone book very easily Register or login to
        manage your contacts.
      </Introduction>
      <Span>
        <HomeButtonLink to="/register">sign-up</HomeButtonLink>
        <HomeButtonLink to="/login">login</HomeButtonLink>
      </Span>
    </WraperHomePage>
  );
};

export default Home;
