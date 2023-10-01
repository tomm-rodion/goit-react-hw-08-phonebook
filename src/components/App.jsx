// import { ContactList } from './ContactList/ContactList';
// import { ContactsFilter } from './ContactsFilter/CotactsFilter';
// import { ContactsForm } from './ContactsForm/ContactsForm';
// import {
//   Wrapper,
//   Container,
//   TitlePhoneBook,
//   TitleContacts,
// } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
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
