import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <p>
        Welcome to the <span>Phonebook</span> web-site!
      </p>
      <p>
        Here you can create your own phonebook very simple - just
        <NavLink to="/register">sign-up</NavLink> or
        <NavLink to="/login">login</NavLink>
        to manage your contacts. Enjoy :)
      </p>
    </div>
  );
}
