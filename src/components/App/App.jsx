// import { ContactList } from './ContactList/ContactList';
// import { ContactsFilter } from './ContactsFilter/CotactsFilter';
// import { ContactsForm } from './ContactsForm/ContactsForm';
// import {
//   Wrapper,
//   Container,
//   TitlePhoneBook,
//   TitleContacts,
// } from './App.styled';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivatRoute';
import { Layout } from '../Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <DotLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

//  <Wrapper>
//    <Container>
//      <TitlePhoneBook>Phonebook</TitlePhoneBook>
//      <ContactsForm />
//    </Container>
//    <Container>
//      <TitleContacts>Contacts</TitleContacts>
//      <ContactsFilter />
//      <ContactList />
//    </Container>
//  </Wrapper>;
